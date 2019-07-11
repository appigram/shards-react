import { h, Component } from "preact"
import classNames from "classnames"
import { Manager } from "react-popper"
import omit from "lodash.omit"
import { DropdownContext } from "./DropdownContext"
import { KEYCODES, EVENTS } from "../constants"
import { HTMLProps, HTMLTag } from "../html"
interface DropdownProps extends Omit<HTMLProps<"div">, "size"> {
  open?: boolean
  disabled?: boolean
  toggle?(e: Event): any
  inNavbar?: boolean
  dropup?: boolean
  tag?: HTMLTag
  nav?: boolean
  direction?: "up" | "down" | "left" | "right"

  group?: boolean
  size?: string
  setActiveFromChild?: boolean
  active?: boolean
  addonType?: string
}
/**
 * You can use dropdowns to display accessible contextual overlays for displaying lists of links and more.
 */
export default class Dropdown extends Component<DropdownProps, {}> {
  public static defaultProps = {
    open: false,
    direction: "down",
    nav: false
  }
  constructor(props: DropdownProps) {
    super(props)
    this.handleListeners = this.handleListeners.bind(this)
    this.addListeners = this.addListeners.bind(this)
    this.removeListeners = this.removeListeners.bind(this)
    this.handleDocumentClick = this.handleDocumentClick.bind(this)
    this.getContainer = this.getContainer.bind(this)
    this.toggle = this.toggle.bind(this)
  }
  public componentDidMount() {
    this.handleListeners()
  }
  public componentWillUnmount() {
    this.removeListeners()
  }
  public componentDidUpdate(prevProps: DropdownProps) {
    if (this.props.open !== prevProps.open) {
      this.handleListeners()
    }
  }
  public handleListeners() {
    if (this.props.open) {
      this.addListeners()
      return
    }
    this.removeListeners()
  }
  public addListeners() {
    EVENTS.CLICK.forEach(e =>
      document.addEventListener(e, this.handleDocumentClick, true)
    )
  }
  public removeListeners() {
    EVENTS.CLICK.forEach(e =>
      document.removeEventListener(e, this.handleDocumentClick, true)
    )
  }
  public getContainer() {
    return this.base
  }
  public handleDocumentClick(e: KeyboardEvent | MouseEvent | any) {
    if (
      e &&
      (e.which === 3 || (e.type === "keyup" && e.which !== KEYCODES.TAB))
    )
      return
    const container = this.getContainer()
    if (
      container &&
      container.contains(e.target as HTMLElement) &&
      container !== e.target &&
      (e.type !== "keyup" || e.which === KEYCODES.TAB)
    ) {
      return
    }
    this.toggle(e)
  }
  public toggle(e: Event) {
    if (this.props.disabled) {
      return e && e.preventDefault()
    }
    const { toggle } = this.props
    return toggle && toggle(e)
  }
  public render() {
    const props = omit(this.props, [
      "toggle",
      "disabled",
      "inNavbar",
      "direction"
    ])
    const {
      className,
      children,
      dropup,
      open = Dropdown.defaultProps.open,
      nav = Dropdown.defaultProps.nav,
      group,
      size,
      setActiveFromChild,
      active,
      addonType,
      ...attrs
    } = props
    const direction =
      this.props.direction === "down" && dropup
        ? "up"
        : this.props.direction || "down"
    attrs.tag = attrs.tag || (nav ? "li" : "div")
    let subItemIsActive = false
    if (setActiveFromChild && children instanceof Array) {
      // @ts-ignore it was like this 🤷‍♂️
      children[1].props.children.map(dropdownItem => {
        if (dropdownItem && dropdownItem.props.active) subItemIsActive = true
      })
    }
    const classes = classNames(
      className,
      direction !== "down" && `drop${direction}`,
      nav && active && "active",
      setActiveFromChild && subItemIsActive && "active",
      addonType && `input-group-${addonType}`,
      group && "btn-group",
      !!size && `btn-group-${size}`,
      !group && !addonType && "dropdown",
      open && "show",
      nav && "nav-item"
    )
    const toggle = this.toggle
    return (
      <DropdownContext.Provider value={{ toggle, open, direction, nav }}>
        <Manager {...attrs}>
          <DropdownContext.Consumer>
            {() => <div className={classes}>{children}</div>}
          </DropdownContext.Consumer>
        </Manager>
      </DropdownContext.Provider>
    )
  }
}
