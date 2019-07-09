import React, { FormHTMLAttributes, Ref } from "react"
import classNames from "classnames"
interface FormProps extends FormHTMLAttributes<{}> {
  className?: string
  inline?: boolean
  innerRef?: Ref<HTMLFormElement>
  tag?: ((...args: any[]) => any) | string
}
/**
 * Examples and usage guidelines for form controls.
 */
export default class Form extends React.Component<FormProps, {}> {
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
    const { className, tag: Tag, inline, innerRef, ...attrs } = this.props
    const classes = classNames(className, inline && "form-inline")
    // @ts-ignore idk
    return <Tag {...attrs} ref={innerRef} className={classes} />
  }
}
