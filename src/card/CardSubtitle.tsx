import { h } from "preact"
import classNames from "classnames"
import { HTMLTag, HTMLProps } from "../html"

interface CardSubtitleProps extends HTMLProps<"div"> {
  tag?: HTMLTag
}
const CardSubtitle = (props: CardSubtitleProps) => {
  const { className, tag, ...attrs } = props
  const classes = classNames(className, "card-subtitle", "text-muted")
  const Tag = tag!

  return <Tag {...attrs} className={classes} />
}
CardSubtitle.defaultProps = {
  tag: "h6"
}
export default CardSubtitle
