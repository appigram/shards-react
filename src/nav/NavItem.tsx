import { h } from "preact"
import classNames from "classnames"
import { HTMLProps, HTMLTag } from "../html"
interface NavItemProps extends HTMLProps<"li"> {
  active?: boolean
  disabled?: boolean
  tag?: HTMLTag
}
const NavItem = (props: NavItemProps) => {
  const { className, active, disabled, tag, ...attrs } = props
  const classes = classNames(
    className,
    "nav-item",
    active && "active",
    disabled && "disabled"
  )
  const Tag = tag!
  return <Tag {...attrs} className={classes} />
}
NavItem.defaultProps = {
  tag: "li"
}
export default NavItem
