import React, { HTMLAttributes } from "react"
import classNames from "classnames"
interface NavbarProps extends HTMLAttributes<{}> {
  full?: boolean
  fixed?: string
  sticky?: string
  theme?: string
  role?: string
  className?: string
  type?: "dark" | "light"
  tag?: ((...args: any[]) => any) | string
  expand?: boolean | string
}
const Navbar: React.FunctionComponent<NavbarProps> = props => {
  const {
    className,
    expand,
    fixed,
    sticky,
    theme,
    type,
    tag: Tag,
    ...attrs
  } = props
  let expandClass
  if (expand === false) {
    expandClass = false
  } else if (expand === true || expand === "xs") {
    expandClass = "navbar-expand"
  } else if (typeof expand === "string") {
    expandClass = `navbar-expand-${expand}`
  }
  const classes = classNames(
    className,
    "navbar",
    expandClass,
    type === "light" && "navbar-light",
    type === "dark" && "navbar-dark",
    theme && `bg-${theme}`,
    fixed && `fixed-${fixed}`,
    sticky && `sticky-${sticky}`
  )
  // @ts-ignore idk
  return <Tag {...attrs} className={classes} />
}
Navbar.defaultProps = {
  tag: "nav",
  expand: false
}
export default Navbar
