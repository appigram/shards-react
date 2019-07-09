import React, { HTMLAttributes } from "react"
import classNames from "classnames"
interface FormGroupProps extends HTMLAttributes<{}> {
  row?: boolean
  check?: boolean
  inline?: boolean
  disabled?: boolean
  tag?: string
  className?: string
}
const FormGroup: React.FunctionComponent<FormGroupProps> = props => {
  const { className, row, disabled, check, inline, tag: Tag, ...attrs } = props
  const classes = classNames(
    className,
    row && "row",
    check ? "form-check" : "form-group",
    check && inline && "form-check-inline",
    check && disabled && "disabled"
  )
  // @ts-ignore idk
  return <Tag {...attrs} className={classes} />
}
FormGroup.defaultProps = {
  tag: "div"
}
export default FormGroup
