import { h } from "preact"
import classNames from "classnames"
import { HTMLTag, HTMLProps } from "../html"

interface CardTextProps extends HTMLProps<"div"> {
  tag?: HTMLTag
}
const CardText = (props: CardTextProps) => {
  const { className, tag, ...attrs } = props
  const classes = classNames(className, "card-text")
  const Tag = tag!

  return <Tag {...attrs} className={classes} />
}
CardText.defaultProps = {
  tag: "p"
}
export default CardText
