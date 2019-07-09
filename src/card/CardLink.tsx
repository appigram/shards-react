import React, { LinkHTMLAttributes, Ref } from "react"
import classNames from "classnames"
interface CardLinkProps extends LinkHTMLAttributes<{}> {
  className?: string
  tag?: ((...args: any[]) => any) | string
  innerRef?: Ref<HTMLLinkElement>
}
const CardLink: React.FunctionComponent<CardLinkProps> = props => {
  const { className, tag: Tag, innerRef, ...attrs } = props
  const classes = classNames(className, "card-link")
  // @ts-ignore idk
  return <Tag {...attrs} ref={innerRef} className={classes} />
}
CardLink.defaultProps = {
  tag: "a"
}
export default CardLink
