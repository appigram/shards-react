import React, { HTMLAttributes } from "react"
import classNames from "classnames"
interface InputGroupProps extends HTMLAttributes<{}> {
  className?: string
  size?: string
  seamless?: boolean
  tag?: ((...args: any[]) => any) | string
}
const InputGroup = (props: InputGroupProps) => {
  const { className, tag: Tag, size, seamless, ...attrs } = props
  const classes = classNames(
    className,
    "input-group",
    seamless && "input-group-seamless",
    size && `input-group-${size}`
  )
  // @ts-ignore idk
  return <Tag {...attrs} className={classes} />
}
InputGroup.defaultProps = {
  tag: "div"
}
export default InputGroup
