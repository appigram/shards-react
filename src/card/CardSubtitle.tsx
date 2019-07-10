import React, { HTMLAttributes } from "react"
import classNames from "classnames"
interface CardSubtitleProps extends HTMLAttributes<{}> {
  className?: string
  tag?: ((...args: any[]) => any) | string
}
const CardSubtitle = (props: CardSubtitleProps) => {
  const { className, tag: Tag, ...attrs } = props
  const classes = classNames(className, "card-subtitle", "text-muted")
  // @ts-ignore idk
  return <Tag {...attrs} className={classes} />
}
CardSubtitle.defaultProps = {
  tag: "h6"
}
export default CardSubtitle
