import { h, Ref, Component } from "preact"
import classNames from "classnames"
import shortid from "shortid"
import { HTMLTag, HTMLProps } from "../html"

interface FormCheckboxProps extends HTMLProps<"input"> {
  inline?: boolean
  valid?: boolean
  invalid?: boolean
  toggle?: boolean
  small?: boolean
  onChange?(...args: any[]): any
  innerRef?: Ref<HTMLInputElement>
  id?: string
}
/**
 * The `FormCheckbox` component is a wrapper over Bootstrap's [custom checkbox component](https://getbootstrap.com/docs/4.1/components/forms/#checkboxes-and-radios-1).
 */
export default class FormCheckbox extends Component<FormCheckboxProps, {}> {
  public static defaultProps = {
    onChange: () => {}
  }
  public ref?: HTMLElement
  constructor(props: FormCheckboxProps) {
    super(props)
    this.getRef = this.getRef.bind(this)
  }
  public getRef(ref: HTMLInputElement) {
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
      inline,
      valid,
      invalid,
      innerRef,
      toggle,
      small,
      id: _id,
      ...attrs
    } = this.props
    const labelClasses = classNames(
      className,
      "custom-control",
      !toggle ? "custom-checkbox" : "custom-toggle",
      toggle && small && "custom-toggle-sm",
      inline && "custom-control-inline",
      valid && "is-valid",
      invalid && "is-invalid"
    )
    const inputClasses = classNames(
      "custom-control-input",
      valid && "is-valid",
      invalid && "is-invalid"
    )
    const id = _id || `dr-checkbox-${shortid.generate()}`
    return (
      <label className={labelClasses}>
        <input
          {...attrs}
          ref={innerRef}
          id={id}
          type="checkbox"
          className={inputClasses}
        />
        <label
          id={id}
          className="custom-control-label"
          aria-hidden="true"
          onClick={this.props.onChange}
        />
        <span className="custom-control-description">{children}</span>
      </label>
    )
  }
}
