import { h } from "preact"
import classNames from "classnames"
import { HTMLProps, HTMLTag } from "../html"
interface NavProps extends HTMLProps<"div"> {
  navbar?: boolean
  horizontal?: string
  tabs?: boolean
  card?: boolean
  pills?: boolean
  justified?: boolean
  fill?: boolean
  vertical?: boolean | string
  tag?: HTMLTag
}
const Nav = (props: NavProps) => {
  const {
    className,
    navbar,
    horizontal,
    vertical,
    tabs,
    card,
    pills,
    justified,
    fill,
    tag,
    ...attrs
  } = props
  let verticalClass
  if (vertical === true || vertical === "xs") {
    verticalClass = "flex-column"
  } else if (vertical === false) {
    verticalClass = false
  } else if (typeof vertical === "string") {
    verticalClass = `flex-${vertical}-column`
  }
  const classes = classNames(
    className,
    navbar ? "navbar-nav" : "nav",
    horizontal && `justify-content-${horizontal}`,
    verticalClass,
    tabs && "nav-tabs",
    card && tabs && "card-header-tabs",
    pills && "nav-pills",
    card && pills && "card-header-pills",
    justified && "nav-justified",
    fill && "nav-fill"
  )
  const Tag = tag!
  return <Tag {...attrs} className={classes} />
}
Nav.defaultProps = {
  tag: "ul",
  vertical: false
}
export default Nav
