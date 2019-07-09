import React, { ButtonHTMLAttributes } from "react"
import classNames from "classnames"
interface NavbarTogglerProps extends ButtonHTMLAttributes<{}> {
  className?: string
  tag?: ((...args: any[]) => any) | string
}
const NavbarToggler: React.FunctionComponent<NavbarTogglerProps> = props => {
  const { className, children, tag: Tag, ...attrs } = props
  const classes = classNames(className, "navbar-toggler")
  return (
    // @ts-ignore idk
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
