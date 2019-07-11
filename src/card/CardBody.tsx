import { h } from "preact"
import classNames from "classnames"
import { HTMLTag, HTMLProps } from "../html"

interface CardBodyProps extends HTMLProps<"div"> {
  tag?: HTMLTag
}
const CardBody = (props: CardBodyProps) => {
  const { className, tag, children, ...attrs } = props
  const classes = classNames(className, "card-body")
  const Tag = tag!
  return (
    <Tag {...attrs} className={classes}>
      {children}
    </Tag>
  )
}
CardBody.defaultProps = {
  tag: "div"
}
export default CardBody
