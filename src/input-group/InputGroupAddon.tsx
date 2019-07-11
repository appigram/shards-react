import { h } from "preact"
import classNames from "classnames"
import InputGroupText from "./InputGroupText"
import { HTMLProps, HTMLTag } from "../html"
interface InputGroupAddonProps extends HTMLProps<"div"> {
  type: string
  tag?: HTMLTag
}
const InputGroupAddon = (props: InputGroupAddonProps) => {
  const { className, children, tag, type, ...attrs } = props
  const classes = classNames(className, `input-group-${type}`)
  const Tag = tag!
  if (typeof children === "string") {
    return (
      <Tag {...attrs} className={classes}>
        <InputGroupText>{children}</InputGroupText>
      </Tag>
    )
  }
  return (
    <Tag {...attrs} className={classes}>
      {children}
    </Tag>
  )
}
InputGroupAddon.defaultProps = {
  tag: "div"
}
export default InputGroupAddon
