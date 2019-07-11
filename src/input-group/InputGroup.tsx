import { h } from "preact"
import classNames from "classnames"
import { HTMLTag, HTMLProps } from "../html"

interface InputGroupProps extends Omit<HTMLProps<"div">, "size"> {
  seamless?: boolean
  tag?: HTMLTag
  size?: string
}
const InputGroup = (props: InputGroupProps) => {
  const { className, tag, size, seamless, ...attrs } = props
  const classes = classNames(
    className,
    "input-group",
    seamless && "input-group-seamless",
    size && `input-group-${size}`
  )
  const Tag = tag!

  return <Tag {...attrs} className={classes} />
}
InputGroup.defaultProps = {
  tag: "div"
}
export default InputGroup
