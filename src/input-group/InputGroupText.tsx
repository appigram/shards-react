import { h } from "preact"
import classNames from "classnames"
import { HTMLTag, HTMLProps } from "../html"
interface InputGroupTextProps extends HTMLProps<"div"> {
  tag?: HTMLTag
}
const InputGroupText = (props: InputGroupTextProps) => {
  const { className, tag, ...attrs } = props
  const classes = classNames(className, "input-group-text")
  const Tag = tag!

  return <Tag {...attrs} className={classes} />
}
InputGroupText.defaultProps = {
  tag: "span"
}
export default InputGroupText
