import { h } from "preact"
import classNames from "classnames"
import { HTMLTag, HTMLProps } from "../html"

interface CardGroupProps extends HTMLProps<"div"> {
  tag?: HTMLTag
}
const CardGroup = (props: CardGroupProps) => {
  const { className, tag, ...attrs } = props
  const classes = classNames(className, "card-group")
  const Tag = tag!

  return <Tag {...attrs} className={classes} />
}
CardGroup.defaultProps = {
  tag: "div"
}
export default CardGroup
