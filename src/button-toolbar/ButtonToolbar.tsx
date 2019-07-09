import React from "react"
import classNames from "classnames"
interface ButtonToolbarProps {
  className?: string
}
const ButtonToolbar: React.FunctionComponent<ButtonToolbarProps> = props => {
  const { className, ...attrs } = props
  const classes = classNames(className, "btn-toolbar")
  return <div className={classes} {...attrs} />
}
export default ButtonToolbar
