import { h, Component } from "preact"
import classNames from "classnames"
import omit from "lodash.omit"
import { DropdownContext } from "./DropdownContext"
import { HTMLTag, HTMLProps } from "../html"
interface DropdownItemProps extends HTMLProps<"button"> {
  active?: boolean
  disabled?: boolean
  divider?: boolean
  header?: boolean
  onClick?(e: MouseEvent): void
  toggle?: boolean
  tag?: HTMLTag
}
class DropdownItem extends Component<DropdownItemProps, {}> {
  public static defaultProps = {
    tag: "button",
    toggle: true
  }
  constructor(props: DropdownItemProps) {
    super(props)
    this.onClick = this.onClick.bind(this)
    this.getTabIndex = this.getTabIndex.bind(this)
  }
  public onClick(e: MouseEvent) {
    if (this.props.disabled || this.props.header || this.props.divider) {
      e.preventDefault()
      return
    }
    if (this.props.onClick) {
      this.props.onClick(e)
    }
    if (this.props.toggle) {
      this.context.toggle(e)
    }
  }
  public getTabIndex() {
    if (this.props.disabled || this.props.header || this.props.divider) {
      return -1
    }
    return 0
  }
  public render() {
    const { className, divider, tag, header, active, ...attrs } = omit(
      this.props,
      ["toggle"]
    )
    const tabIndex = this.getTabIndex()
    const classes = classNames(
      className,
      attrs.disabled && "disabled",
      !divider && !header && "dropdown-item",
      header && "dropdown-header",
      divider && "dropdown-divider",
      active && "active"
    )
    const attrsOther = attrs as any
    let Tag: HTMLTag = "button"
    if (tag === "button") {
      if (header) {
        Tag = "h6"
      } else if (divider) {
        Tag = "div"
      } else if (attrsOther.href) {
        Tag = "a"
      }
    }
    return (
      <Tag
        type={
          Tag === "button" && (attrs.onClick || attrsOther.toggle)
            ? "button"
            : undefined
        }
        {...attrs}
        tabIndex={tabIndex}
        className={classes}
        onClick={this.onClick}
      />
    )
  }
}
DropdownItem.contextType = DropdownContext
export default DropdownItem
