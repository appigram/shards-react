import React, { HTMLAttributes } from "react"
import classNames from "classnames"
interface BreadcrumbProps extends HTMLAttributes<{}> {
  listClassName?: string
  className?: string
  "aria-label"?: string
  tag?: ((...args: any[]) => any) | string
  listTag?: ((...args: any[]) => any) | string
}
const Breadcrumb: React.FunctionComponent<BreadcrumbProps> = props => {
  const {
    className,
    listClassName,
    children,
    tag: Tag,
    listTag: ListTag,
    "aria-label": label,
    ...attrs
  } = props
  const classes = classNames(className)
  const listClasses = classNames("breadcrumb", listClassName)
  return (
    // @ts-ignore idk
    <Tag {...attrs} className={classes} aria-label={label}>
      // @ts-ignore idk
      <ListTag className={listClasses}>{children}</ListTag>
    </Tag>
  )
}
Breadcrumb.defaultProps = {
  "aria-label": "breadcrumb",
  tag: "nav",
  listTag: "ol"
}
export default Breadcrumb
