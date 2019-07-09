import React, { HTMLAttributes } from "react"
import classNames from "classnames"
import InputGroupText from "./InputGroupText"
interface InputGroupAddonProps extends HTMLAttributes<{}> {
  className?: string
  type: string
  tag?: string
}
const InputGroupAddon: React.FunctionComponent<
  InputGroupAddonProps
> = props => {
  const { className, children, tag: Tag, type, ...attrs } = props
  const classes = classNames(className, `input-group-${type}`)
  if (typeof children === "string") {
    return (
      // @ts-ignore idk
      <Tag {...attrs} className={classes}>
        <InputGroupText>{children}</InputGroupText>
      </Tag>
    )
  }
  return (
    // @ts-ignore idk
    <Tag {...attrs} className={classes}>
      {children}
    </Tag>
  )
}
InputGroupAddon.defaultProps = {
  tag: "div"
}
export default InputGroupAddon
