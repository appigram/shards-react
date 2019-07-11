import { h } from "preact"
import classNames from "classnames"
import { HTMLTag, HTMLProps } from "../html"

interface ButtonToolbarProps extends HTMLProps<"div"> {}
const ButtonToolbar = (props: ButtonToolbarProps) => {
  const { className, ...attrs } = props
  const classes = classNames(className, "btn-toolbar")
  return <div className={classes} {...attrs} />
}
export default ButtonToolbar
