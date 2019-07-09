import React, { Ref } from "react"
import classNames from "classnames"
interface FormSelectProps {
  className?: string
  size?: string
  valid?: boolean
  invalid?: boolean
  innerRef?: Ref<HTMLSelectElement>
}
/**
 * The `FormSelect` component is a wrapper over Bootstrap's [custom select component](https://getbootstrap.com/docs/4.1/components/forms/#select-menu).
 */
class FormSelect extends React.Component<FormSelectProps, {}> {
  private ref?: HTMLSelectElement | null
  constructor(props: FormSelectProps) {
    super(props)
    this.getRef = this.getRef.bind(this)
  }
  public getRef(ref: HTMLSelectElement) {
    const { innerRef } = this.props
    if (typeof innerRef === "function") {
      innerRef(ref)
    }
    this.ref = ref
  }
  public render() {
    const {
      className,
      children,
      size,
      valid,
      invalid,
      innerRef,
      ...attrs
    } = this.props
    const classes = classNames(
      className,
      "form-control",
      "custom-select",
      valid && "is-valid",
      invalid && "is-invalid",
      size && `form-control-${size}`,
      size && `custom-select-${size}`
    )
    return (
      <select {...attrs} className={classes} ref={innerRef}>
        {children}
      </select>
    )
  }
}
export default FormSelect
