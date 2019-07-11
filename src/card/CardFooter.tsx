import { h } from "preact"
import classNames from "classnames"
import { HTMLTag, HTMLProps } from "../html"
interface CardFooterProps extends HTMLProps<"div"> {
  tag?: HTMLTag
}
const CardFooter = (props: CardFooterProps) => {
  const { className, tag, ...attrs } = props
  const classes = classNames(className, "card-footer")
  const Tag = tag!

  return <Tag {...attrs} className={classes} />
}
CardFooter.defaultProps = {
  tag: "div"
}
export default CardFooter
