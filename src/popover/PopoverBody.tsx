import { h } from "preact"
import classNames from "classnames"
import { HTMLTag, HTMLProps } from "../html"

interface PopoverBodyProps extends HTMLProps<"div"> {
  tag?: HTMLTag
}
const PopoverBody = (props: PopoverBodyProps) => {
  const { className, tag, ...attrs } = props
  const classes = classNames(className, "popover-body")
  const Tag = tag!
  return <Tag {...attrs} className={classes} />
}
PopoverBody.defaultProps = {
  tag: "div"
}
export default PopoverBody
