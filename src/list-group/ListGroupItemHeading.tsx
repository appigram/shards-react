import React, { HTMLAttributes } from "react"
import classNames from "classnames"
interface ListGroupItemHeadingProps extends HTMLAttributes<{}> {
  tag?: ((...args: any[]) => any) | string
}
const ListGroupItemHeading: React.FunctionComponent<
  ListGroupItemHeadingProps
> = props => {
  const { className, tag: Tag, ...attrs } = props
  const classes = classNames(className, "list-group-item-heading")
  // @ts-ignore idk
  return <Tag {...attrs} className={classes} />
}
ListGroupItemHeading.defaultProps = {
  tag: "h5"
}
export default ListGroupItemHeading
