import { h, Ref, Component } from "preact"
import classNames from "classnames"
import { HTMLTag, HTMLProps } from "../html"

interface FormSelectProps extends Omit<HTMLProps<"select">, "size"> {
  valid?: boolean
  invalid?: boolean
  size?: string
  innerRef?: Ref<HTMLSelectElement>
}
/**
 * The `FormSelect` component is a wrapper over Bootstrap's [custom select component](https://getbootstrap.com/docs/4.1/components/forms/#select-menu).
 */
class FormSelect extends Component<FormSelectProps, {}> {
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
