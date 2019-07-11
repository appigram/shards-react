import { h, Ref, Component } from "preact"
import classNames from "classnames"
import shortid from "shortid"
import { HTMLTag, HTMLProps } from "../html"

interface FormRadioProps extends HTMLProps<"input"> {
  id?: string
  inline?: boolean
  valid?: boolean
  onChange?(...args: any[]): any
  invalid?: boolean
  innerRef?: Ref<HTMLInputElement>
}
export default class FormRadio extends Component<FormRadioProps, {}> {
  public static defaultProps = {
    onChange: () => {}
  }
  private ref?: HTMLInputElement | null
  constructor(props: FormRadioProps) {
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
      onChange,
      id: _id,
      ...attrs
    } = this.props
    const labelClasses = classNames(
      "custom-control",
      "custom-radio",
      inline && "custom-control-inline",
      valid && "is-valid",
      invalid && "is-invalid"
    )
    const inputClasses = classNames(
      className,
      "custom-control-input",
      valid && "is-valid",
      invalid && "is-invalid"
    )
    const id = _id || `dr-radio-${shortid.generate()}`
    return (
      <label className={labelClasses}>
        <input
          {...attrs}
          ref={innerRef}
          id={id}
          type="radio"
          className={inputClasses}
          onChange={onChange}
        />
        <label
          id={id}
          className="custom-control-label"
          aria-hidden="true"
          onClick={onChange}
        />
        <span className="custom-control-description">{children}</span>
      </label>
    )
  }
}
