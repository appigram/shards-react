import { h } from "preact"
import classNames from "classnames"
import { HTMLProps, HTMLTag } from "../html"
interface FormFeedbackProps extends HTMLProps<"div"> {
  tag?: HTMLTag
  valid?: boolean
  tooltip?: boolean
}
const FormFeedback = (props: FormFeedbackProps) => {
  const { className, valid, tooltip, tag, ...attrs } = props
  const validMode = tooltip ? "tooltip" : "feedback"
  const classes = classNames(
    className,
    valid ? `valid-${validMode}` : `invalid-${validMode}`
  )
  const Tag = tag!
  return <Tag {...attrs} className={classes} />
}
FormFeedback.defaultProps = {
  tag: "div",
  valid: undefined
}
export default FormFeedback
