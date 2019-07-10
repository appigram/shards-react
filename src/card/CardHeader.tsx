import React, { HTMLAttributes } from "react"
import classNames from "classnames"
interface CardHeaderProps extends HTMLAttributes<{}> {
  className?: string
  tag?: ((...args: any[]) => any) | string
}
const CardHeader = (props: CardHeaderProps) => {
  const { className, tag: Tag, ...attrs } = props
  const classes = classNames(className, "card-header")
  // @ts-ignore
  return <Tag {...attrs} className={classes} />
}
CardHeader.defaultProps = {
  tag: "div"
}
export default CardHeader
