import { h } from "preact"
import classNames from "classnames"
import { HTMLTag, HTMLProps } from "../html"

interface ListGroupItemHeadingProps extends HTMLProps<"div"> {
  tag?: HTMLTag
}
const ListGroupItemHeading = (props: ListGroupItemHeadingProps) => {
  const { className, tag, ...attrs } = props
  const classes = classNames(className, "list-group-item-heading")
  const Tag = tag!

  return <Tag {...attrs} className={classes} />
}
ListGroupItemHeading.defaultProps = {
  tag: "h5"
}
export default ListGroupItemHeading
