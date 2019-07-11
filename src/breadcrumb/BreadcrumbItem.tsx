import { h } from "preact"
import classNames from "classnames"
import { HTMLTag, HTMLProps } from "../html"
interface BreadcrumbItemProps extends HTMLProps<"li"> {
  active?: boolean
  tag?: HTMLTag
}
const BreadcrumbItem = (props: BreadcrumbItemProps) => {
  const { className, active, tag, ...attrs } = props
  const classes = classNames(className, active && "active", "breadcrumb-item")
  const Tag = tag!
  return (
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
