import React, { LiHTMLAttributes } from "react"
import classNames from "classnames"
interface NavItemProps extends LiHTMLAttributes<{}> {
  active?: boolean
  disabled?: boolean
  className?: string
  tag?: ((...args: any[]) => any) | string
}
const NavItem = (props: NavItemProps) => {
  const { className, active, disabled, tag: Tag, ...attrs } = props
  const classes = classNames(
    className,
    "nav-item",
    active && "active",
    disabled && "disabled"
  )
  // @ts-ignore idk
  return <Tag {...attrs} className={classes} />
}
NavItem.defaultProps = {
  tag: "li"
}
export default NavItem
