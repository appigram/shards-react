import React from "react";
import classNames from "classnames";
import { INPUT_TYPES } from "../constants";
type FormInputProps = {
  className?: string,
  inline?: boolean,
  type?: any,
  plaintext?: boolean,
  size?: string,
  valid?: boolean,
  invalid?: boolean,
  innerRef?: object | ((...args: any[]) => any) | string
};
/**
 * The form input allows you to create various text style inputs such as `text`, `password`, `email`, `number`, `url`, `search` and more.
 */
class FormInput extends React.Component<FormInputProps, {}> {
  constructor(props) {
    super(props);
    this.ref = null;
    this.getRef = this.getRef.bind(this);
    this.focus = this.focus.bind(this);
  }
  getRef(ref) {
    if (this.props.innerRef) {
      this.props.innerRef(ref);
    }
    this.ref = ref;
  }
  focus() {
    if (this.ref) {
      this.ref.focus();
    }
  }
  render() {
    const {
      className,
      plaintext,
      size,
      invalid,
      valid,
      innerRef,
      ...attrs
    } = this.props;
    const classes = classNames(
      className,
      plaintext ? "form-control-plaintext" : "form-control",
      plaintext && "w-100",
      size && `form-control-${size}`,
      valid && "is-valid",
      invalid && "is-invalid"
    );
    return <input {...attrs} ref={innerRef} className={classes} />;
  }
}
export default FormInput;
