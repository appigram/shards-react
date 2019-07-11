import { h } from "preact"
import classNames from "classnames"
import { HTMLTag, HTMLProps } from "../html"
interface CardColumnsProps extends HTMLProps<"div"> {
  tag?: HTMLTag
}
const CardColumns = (props: CardColumnsProps) => {
  const { className, tag, ...attrs } = props
  const classes = classNames(className, "card-columns")
  const Tag = tag!
  return <Tag {...attrs} className={classes} />
}
CardColumns.defaultProps = {
  tag: "div"
}
export default CardColumns
