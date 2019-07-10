import React, { HTMLAttributes } from "react"
import classNames from "classnames"
interface CardGroupProps extends HTMLAttributes<{}> {
  className?: string
  tag?: ((...args: any[]) => any) | string
}
const CardGroup = (props: CardGroupProps) => {
  const { className, tag: Tag, ...attrs } = props
  const classes = classNames(className, "card-group")
  // @ts-ignore idk
  return <Tag {...attrs} className={classes} />
}
CardGroup.defaultProps = {
  tag: "div"
}
export default CardGroup
