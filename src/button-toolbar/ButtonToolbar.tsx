import React, { HTMLAttributes } from "react"
import classNames from "classnames"
interface ButtonToolbarProps extends HTMLAttributes<{}> {
  className?: string
}
const ButtonToolbar = (props: ButtonToolbarProps) => {
  const { className, ...attrs } = props
  const classes = classNames(className, "btn-toolbar")
  return <div className={classes} {...attrs} />
}
export default ButtonToolbar
