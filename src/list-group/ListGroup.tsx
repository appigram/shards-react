import React, { HTMLAttributes } from "react"
import classNames from "classnames"
interface ListGroupProps extends HTMLAttributes<{}> {
  className?: string
  flush?: boolean
  small?: boolean
  tag?: ((...args: any[]) => any) | string
}
const ListGroup: React.FunctionComponent<ListGroupProps> = props => {
  const { className, tag: Tag, flush, small, ...attrs } = props
  const classes = classNames(
    className,
    "list-group",
    small && "list-group-sm",
    flush && "list-group-flush"
  )
  // @ts-ignore idk
  return <Tag {...attrs} className={classes} />
}
ListGroup.defaultProps = {
  tag: "ul"
}
export default ListGroup
