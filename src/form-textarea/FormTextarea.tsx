import { h, Ref, Component } from "preact"
import classNames from "classnames"
import { HTMLTag, HTMLProps } from "../html"

interface FormTextareaProps extends HTMLProps<"textarea"> {
  plaintext?: boolean
  valid?: boolean
  invalid?: boolean
  innerRef?: Ref<HTMLTextAreaElement>
}
/**
 * The `FormTextarea` component allows you to easily create multi-line text inputs.
 */
class FormTextarea extends Component<FormTextareaProps, {}> {
  private ref?: HTMLTextAreaElement | null
  constructor(props: FormTextareaProps) {
    super(props)
    this.getRef = this.getRef.bind(this)
  }
  public getRef(ref: HTMLTextAreaElement) {
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
      innerRef,
      plaintext,
      size,
      valid,
      invalid,
      ...attrs
    } = this.props
    const classes = classNames(
      className,
      children,
      plaintext ? "form-control-plaintext" : "form-control",
      plaintext && "w-100",
      size && `form-control-${size}`,
      valid && "is-valid",
      invalid && "is-invalid"
    )
    return <textarea {...attrs} className={classes} ref={innerRef} />
  }
}
export default FormTextarea
