import React, { HTMLAttributes } from "react"
import classNames from "classnames"
interface FormFeedbackProps extends HTMLAttributes<{}> {
  tag?: string
  className?: string
  valid?: boolean
  tooltip?: boolean
}
const FormFeedback: React.FunctionComponent<FormFeedbackProps> = props => {
  const { className, valid, tooltip, tag: Tag, ...attrs } = props
  const validMode = tooltip ? "tooltip" : "feedback"
  const classes = classNames(
    className,
    valid ? `valid-${validMode}` : `invalid-${validMode}`
  )
  // @ts-ignore idk
  return <Tag {...attrs} className={classes} />
}
FormFeedback.defaultProps = {
  tag: "div",
  valid: undefined
}
export default FormFeedback
