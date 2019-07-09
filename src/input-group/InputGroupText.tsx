import React, { HTMLAttributes } from "react"
import classNames from "classnames"
interface InputGroupTextProps extends HTMLAttributes<{}> {
  className?: string
  tag?: ((...args: any[]) => any) | string
}
const InputGroupText: React.FunctionComponent<InputGroupTextProps> = props => {
  const { className, tag: Tag, ...attrs } = props
  const classes = classNames(className, "input-group-text")
  // @ts-ignore idk
  return <Tag {...attrs} className={classes} />
}
InputGroupText.defaultProps = {
  tag: "span"
}
export default InputGroupText
