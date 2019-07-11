import { h, Ref } from "preact"
import classNames from "classnames"
import { HTMLTag, HTMLProps } from "../html"

interface CardLinkProps extends HTMLProps<"a"> {
  tag?: HTMLTag
  innerRef?: Ref<HTMLLinkElement>
}
const CardLink = (props: CardLinkProps) => {
  const { className, tag, innerRef, ...attrs } = props
  const classes = classNames(className, "card-link")
  const Tag = tag!

  return <Tag {...attrs} ref={innerRef} className={classes} />
}
CardLink.defaultProps = {
  tag: "a"
}
export default CardLink
