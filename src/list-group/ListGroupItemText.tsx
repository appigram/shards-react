import React, { HTMLAttributes } from "react"
import classNames from "classnames"
interface ListGroupItemTextProps extends HTMLAttributes<{}> {
  className?: string
  tag?: ((...args: any[]) => any) | string
}
const ListGroupItemText: React.FunctionComponent<
  ListGroupItemTextProps
> = props => {
  const { className, tag: Tag, ...attrs } = props
  const classes = classNames(className, "list-group-item-text")
  // @ts-ignore idk
  return <Tag {...attrs} className={classes} />
}
ListGroupItemText.defaultProps = {
  tag: "p"
}
export default ListGroupItemText
