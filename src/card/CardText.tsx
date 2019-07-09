import React, { HTMLAttributes } from "react"
import classNames from "classnames"
interface CardTextProps extends HTMLAttributes<{}> {
  className?: string
  tag?: ((...args: any[]) => any) | string
}
const CardText: React.FunctionComponent<CardTextProps> = props => {
  const { className, tag: Tag, ...attrs } = props
  const classes = classNames(className, "card-text")
  // @ts-ignore idk
  return <Tag {...attrs} className={classes} />
}
CardText.defaultProps = {
  tag: "p"
}
export default CardText
