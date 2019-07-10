import React, { LiHTMLAttributes } from "react"
import classNames from "classnames"
interface BreadcrumbItemProps extends LiHTMLAttributes<{}> {
  active?: boolean
  className?: string
  tag?: ((...args: any[]) => any) | string
}
const BreadcrumbItem = (props: BreadcrumbItemProps) => {
  const { className, active, tag: Tag, ...attrs } = props
  const classes = classNames(className, active && "active", "breadcrumb-item")
  return (
    // @ts-ignore idk
    <Tag
      {...attrs}
      className={classes}
      aria-current={active ? "page" : undefined}
    />
  )
}
BreadcrumbItem.defaultProps = {
  tag: "li"
}
export default BreadcrumbItem
