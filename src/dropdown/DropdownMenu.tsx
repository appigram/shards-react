import { h, Component } from "preact"
import classNames from "classnames"
import { Popper } from "react-popper"
import { DropdownContext } from "./DropdownContext"
import { DROPDOWN_POSITION_MAP } from "../constants"
import { HTMLProps, HTMLTag } from "../html"
interface DropdownMenuProps extends HTMLProps<"div"> {
  tag?: HTMLTag
  right?: boolean
  flip?: boolean
  small?: boolean
  modifiers?: object
  persist?: boolean
}
export default class DropdownMenu extends Component<DropdownMenuProps, {}> {
  public static contextType = DropdownContext

  public static defaultProps = {
    tag: "div",
    flip: true
  }
  public render() {
    const {
      className,
      children,
      right,
      tag,
      flip,
      small,
      modifiers,
      persist,
      ...attrs
    } = this.props
    const classes = classNames(
      className,
      "dropdown-menu",
      small && "dropdown-menu-small",
      right && "dropdown-menu-right",
      this.context.open && "show"
    )
    const attrsOther = attrs as any
    const Tag = tag!
    if (persist || (this.context.open && !this.context.inNavbar)) {
      const pos1 =
        (DROPDOWN_POSITION_MAP as any)[this.context.direction] || "bottom"
      const pos2 = right ? "end" : "start"
      attrsOther.placement = `${pos1}-${pos2}`
      attrsOther.component = Tag
      attrsOther.modifiers = !flip
        ? {
            ...modifiers,
            ...{
              flip: {
                enabled: false
              }
            }
          }
        : modifiers
      return (
        <Popper {...attrsOther}>
          {({ ref, placement }) => (
            <div
              ref={ref}
              className={classes}
              x-placement={placement}
              aria-hidden={!this.context.open}
              tabIndex={-1}
              role="menu"
            >
              {children}
            </div>
          )}
        </Popper>
      )
    }
    return (
      <Tag tabIndex={-1} role="menu" {...attrs} className={classes}>
        {children}
      </Tag>
    )
  }
}
