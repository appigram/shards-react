import React, { HTMLAttributes, Ref } from "react"
import classNames from "classnames"
interface CardProps extends HTMLAttributes<{}> {
  className?: string
  theme?: string
  outline?: boolean
  tag?: ((...args: any[]) => any) | string
  small?: boolean
  innerRef?: Ref<HTMLDivElement>
}
const Card: React.FunctionComponent<CardProps> = props => {
  const {
    className,
    innerRef,
    tag: Tag,
    theme,
    outline,
    small,
    ...attrs
  } = props
  const classes = classNames(
    className,
    "card",
    small && "card-small",
    theme && `${outline ? "border" : "bg"}-${theme}`
  )
  // @ts-ignore idk
  return <Tag {...attrs} className={classes} ref={innerRef} />
}
Card.defaultProps = {
  tag: "div"
}
export default Card
