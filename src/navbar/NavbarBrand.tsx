import { h } from "preact"
import classNames from "classnames"
import { HTMLTag, HTMLProps } from "../html"

interface NavbarBrandProps extends HTMLProps<"a"> {
  tag: HTMLTag
}
const NavbarBrand = (props: NavbarBrandProps) => {
  const { className, tag, ...attrs } = props
  const classes = classNames(className, "navbar-brand")
  const Tag = tag!
  return <Tag {...attrs} className={classes}></Tag>
}
NavbarBrand.defaultProps = {
  tag: "a"
}
export default NavbarBrand
