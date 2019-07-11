import { h } from "preact"
import classNames from "classnames"
import { HTMLTag, HTMLProps } from "../html"

interface CardTitleProps extends HTMLProps<"div"> {
  tag?: HTMLTag
}
const CardTitle = (props: CardTitleProps) => {
  const { className, tag, ...attributes } = props
  const classes = classNames(className, "card-title")
  const Tag = tag!

  return <Tag {...attributes} className={classes} />
}
CardTitle.defaultProps = {
  tag: "h5"
}
export default CardTitle
