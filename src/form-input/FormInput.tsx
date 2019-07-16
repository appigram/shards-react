import { h, Ref, Component } from "preact"
import classNames from "classnames"
import { HTMLTag, HTMLProps } from "../html"

interface FormInputProps extends Omit<HTMLProps<"input">, "size"> {
  inline?: boolean
  type?: string
  plaintext?: boolean
  size?: string
  valid?: boolean
  invalid?: boolean
  innerRef?: Ref<HTMLInputElement>
}
/**
 * The form input allows you to create various text style inputs such as `text`, `password`, `email`, `number`, `url`, `search` and more.
 */
class FormInput extends Component<FormInputProps, {}> {
  private ref: HTMLInputElement | null

  constructor(props: FormInputProps) {
    super(props)
    this.ref = null
    this.getRef = this.getRef.bind(this)
    this.focus = this.focus.bind(this)
  }
  public getRef(ref: HTMLInputElement) {
    const { innerRef } = this.props
    if (typeof innerRef === "function") {
      innerRef(ref)
    }
    this.ref = ref
  }
  public focus() {
    if (this.ref) {
      this.ref.focus()
    }
  }
  public render() {
    const {
      className,
      plaintext,
      size,
      invalid,
      valid,
      innerRef,
      ...attrs
    } = this.props
    const classes = classNames(
      className,
      plaintext ? "form-control-plaintext" : "form-control",
      plaintext && "w-100",
      size && `form-control-${size}`,
      valid && "is-valid",
      invalid && "is-invalid"
    )
    return <input {...attrs} ref={innerRef} className={classes} />
  }
}
export default FormInput
