import { h } from "preact"
import classNames from "classnames"
import { HTMLTag, HTMLProps } from "../html"

interface PopoverHeaderProps extends HTMLProps<"div"> {
  tag?: HTMLTag
}
const PopoverHeader = (props: PopoverHeaderProps) => {
  const { className, tag, ...attrs } = props
  const classes = classNames(className, "popover-header")
  const Tag = tag!
  return <Tag {...attrs} className={classes} />
}
PopoverHeader.defaultProps = {
  tag: "h3"
}
export default PopoverHeader
