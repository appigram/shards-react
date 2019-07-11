import { h } from "preact"
import classNames from "classnames"
import { HTMLTag, HTMLProps } from "../html"

interface NavbarProps extends HTMLProps<"div"> {
  full?: boolean
  fixed?: string
  sticky?: string
  theme?: string
  role?: string
  type?: "dark" | "light"
  tag?: HTMLTag
  expand?: boolean | string
}
const Navbar = (props: NavbarProps) => {
  const { className, expand, fixed, sticky, theme, type, tag, ...attrs } = props
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
  const Tag = tag!

  return <Tag {...attrs} className={classes} />
}
Navbar.defaultProps = {
  tag: "nav",
  expand: false
}
export default Navbar
