import { h } from "preact"
import classNames from "classnames"
import { HTMLTag, HTMLProps } from "../html"

interface CardHeaderProps extends HTMLProps<"div"> {
  tag?: HTMLTag
}
const CardHeader = (props: CardHeaderProps) => {
  const { className, tag, ...attrs } = props
  const classes = classNames(className, "card-header")
  // @ts-ignore
  return <Tag {...attrs} className={classes} />
}
CardHeader.defaultProps = {
  tag: "div"
}
export default CardHeader
