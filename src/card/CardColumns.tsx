import React, { HTMLAttributes } from "react"
import classNames from "classnames"
interface CardColumnsProps extends HTMLAttributes<{}> {
  className?: string
  tag?: ((...args: any[]) => any) | string
}
const CardColumns: React.FunctionComponent<CardColumnsProps> = props => {
  const { className, tag: Tag, ...attrs } = props
  const classes = classNames(className, "card-columns")
  // @ts-ignore idk
  return <Tag {...attrs} className={classes} />
}
CardColumns.defaultProps = {
  tag: "div"
}
export default CardColumns
