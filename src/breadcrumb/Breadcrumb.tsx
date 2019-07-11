import { h } from "preact"
import { HTMLTag, HTMLProps } from "../html"
import classNames from "classnames"

interface BreadcrumbProps extends HTMLProps<"div"> {
  listClassName?: string
  "aria-label"?: string
  tag?: HTMLTag
  listTag?: HTMLTag
}
const Breadcrumb = (props: BreadcrumbProps) => {
  const {
    className,
    listClassName,
    children,
    tag,
    listTag,
    "aria-label": label,
    ...attrs
  } = props
  const classes = classNames(className)
  const listClasses = classNames("breadcrumb", listClassName)
  const Tag = tag!
  const ListTag = listTag!
  return (
    <Tag {...attrs} className={classes} aria-label={label}>
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
