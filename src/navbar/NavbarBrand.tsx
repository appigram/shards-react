import React, { LinkHTMLAttributes } from "react"
import classNames from "classnames"
interface NavbarBrandProps extends LinkHTMLAttributes<{}> {
  className?: string
}
const NavbarBrand = (props: NavbarBrandProps) => {
  const { className, ...attrs } = props
  const classes = classNames(className, "navbar-brand")
  return <a {...attrs} className={classes}></a>
}
export default NavbarBrand
