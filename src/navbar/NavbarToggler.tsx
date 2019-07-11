import { h } from "preact"
import classNames from "classnames"
import { HTMLTag, HTMLProps } from "../html"

interface NavbarTogglerProps extends HTMLProps<"button"> {
  tag?: HTMLTag
}
const NavbarToggler = (props: NavbarTogglerProps) => {
  const { className, children, tag, ...attrs } = props
  const classes = classNames(className, "navbar-toggler")
  const Tag = tag!
  return (
    <Tag {...attrs} className={classes}>
      {children || <span className="navbar-toggler-icon" />}
    </Tag>
  )
}
NavbarToggler.defaultProps = {
  tag: "button",
  type: "button"
}
export default NavbarToggler
