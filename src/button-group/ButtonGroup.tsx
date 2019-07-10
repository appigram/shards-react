import React, { HTMLAttributes } from "react"
import classNames from "classnames"
interface ButtonGroupProps extends HTMLAttributes<{}> {
  className?: string
  size?: string
  vertical?: boolean
}
const ButtonGroup = (props: ButtonGroupProps) => {
  const { className, vertical, size, ...attrs } = props
  const classes = classNames(
    className,
    size && `btn-group-${size}`,
    vertical ? "btn-group-vertical" : "btn-group"
  )
  return <div className={classes} {...attrs} />
}
export default ButtonGroup
