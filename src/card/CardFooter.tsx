import React, { HTMLAttributes } from "react"
import classNames from "classnames"
interface CardFooterProps extends HTMLAttributes<{}> {
  tag?: ((...args: any[]) => any) | string
  className?: string
}
const CardFooter: React.FunctionComponent<CardFooterProps> = props => {
  const { className, tag: Tag, ...attrs } = props
  const classes = classNames(className, "card-footer")
  // @ts-ignore idk
  return <Tag {...attrs} className={classes} />
}
CardFooter.defaultProps = {
  tag: "div"
}
export default CardFooter
