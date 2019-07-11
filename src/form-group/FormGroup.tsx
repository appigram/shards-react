import { h } from "preact"
import classNames from "classnames"
import { HTMLTag, HTMLProps } from "../html"

interface FormGroupProps extends HTMLProps<"div"> {
  row?: boolean
  check?: boolean
  inline?: boolean
  disabled?: boolean
  tag?: HTMLTag
}
const FormGroup = (props: FormGroupProps) => {
  const { className, row, disabled, check, inline, tag, ...attrs } = props
  const classes = classNames(
    className,
    row && "row",
    check ? "form-check" : "form-group",
    check && inline && "form-check-inline",
    check && disabled && "disabled"
  )
  const Tag = tag!

  return <Tag {...attrs} className={classes} />
}
FormGroup.defaultProps = {
  tag: "div"
}
export default FormGroup
