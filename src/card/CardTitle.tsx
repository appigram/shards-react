import React, { HTMLAttributes } from "react"
import classNames from "classnames"
interface CardTitleProps extends HTMLAttributes<{}> {
  className?: string
  tag?: ((...args: any[]) => any) | string
}
const CardTitle: React.FunctionComponent<CardTitleProps> = props => {
  const { className, tag: Tag, ...attributes } = props
  const classes = classNames(className, "card-title")
  // @ts-ignore idk
  return <Tag {...attributes} className={classes} />
}
CardTitle.defaultProps = {
  tag: "h5"
}
export default CardTitle
