import { h } from "preact"
import classNames from "classnames"
import { HTMLTag, HTMLProps } from "../html"
interface ListGroupProps extends HTMLProps<"div"> {
  flush?: boolean
  small?: boolean
  tag?: HTMLTag
}
const ListGroup = (props: ListGroupProps) => {
  const { className, tag, flush, small, ...attrs } = props
  const classes = classNames(
    className,
    "list-group",
    small && "list-group-sm",
    flush && "list-group-flush"
  )
  const Tag = tag!

  return <Tag {...attrs} className={classes} />
}
ListGroup.defaultProps = {
  tag: "ul"
}
export default ListGroup
