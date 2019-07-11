import { h, Ref } from "preact"
import classNames from "classnames"
import { HTMLTag, HTMLProps } from "../html"

interface CardProps extends HTMLProps<"div"> {
  theme?: string
  outline?: boolean
  tag?: HTMLTag
  small?: boolean
  innerRef?: Ref<HTMLDivElement>
}
const Card = (props: CardProps) => {
  const { className, innerRef, tag, theme, outline, small, ...attrs } = props
  const classes = classNames(
    className,
    "card",
    small && "card-small",
    theme && `${outline ? "border" : "bg"}-${theme}`
  )
  const Tag = tag!
  return <Tag {...attrs} className={classes} ref={innerRef} />
}
Card.defaultProps = {
  tag: "div"
}
export default Card
