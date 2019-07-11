import { h, Component, Ref } from "preact"
import classNames from "classnames"
import { HTMLTag, HTMLProps } from "../html"
interface FormProps extends HTMLProps<"form"> {
  inline?: boolean
  innerRef?: Ref<HTMLFormElement>
  tag?: HTMLTag
}
/**
 * Examples and usage guidelines for form controls.
 */
export default class Form extends Component<FormProps, {}> {
  public static defaultProps = {
    tag: "form"
  }
  private ref?: HTMLFormElement | null
  constructor(props: FormProps) {
    super(props)
    this.getRef = this.getRef.bind(this)
    this.submit = this.submit.bind(this)
  }
  public getRef(ref: HTMLFormElement) {
    const { innerRef } = this.props
    if (typeof innerRef === "function") {
      innerRef(ref)
    }
    this.ref = ref
  }
  public submit() {
    if (this.ref) {
      this.ref.submit()
    }
  }
  public render() {
    const { className, tag, inline, innerRef, ...attrs } = this.props
    const classes = classNames(className, inline && "form-inline")
    const Tag = tag!
    return <Tag {...attrs} ref={innerRef} className={classes} />
  }
}
