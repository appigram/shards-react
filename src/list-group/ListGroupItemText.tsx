import { h } from "preact"
import classNames from "classnames"
import { HTMLTag, HTMLProps } from "../html"

interface ListGroupItemTextProps extends HTMLProps<"div"> {
  tag?: HTMLTag
}
const ListGroupItemText = (props: ListGroupItemTextProps) => {
  const { className, tag, ...attrs } = props
  const classes = classNames(className, "list-group-item-text")
  const Tag = tag!

  return <Tag {...attrs} className={classes} />
}
ListGroupItemText.defaultProps = {
  tag: "p"
}
export default ListGroupItemText
