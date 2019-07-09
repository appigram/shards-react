import React from "react";
import classNames from "classnames";
import shortid from "shortid";
type FormRadioProps = {
  className?: string,
  inline?: boolean,
  valid?: boolean,
  onChange?: (...args: any[]) => any,
  invalid?: boolean,
  innerRef?: object | ((...args: any[]) => any) | string
};
class FormRadio extends React.Component<FormRadioProps, {}> {
  constructor(props) {
    super(props);
    this.getRef = this.getRef.bind(this);
  }
  getRef(ref) {
    if (this.props.innerRef) {
      this.props.innerRef(ref);
    }
    this.ref = ref;
  }
  render() {
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
    } = this.props;
    const labelClasses = classNames(
      "custom-control",
      "custom-radio",
      inline && "custom-control-inline",
      valid && "is-valid",
      invalid && "is-invalid"
    );
    const inputClasses = classNames(
      className,
      "custom-control-input",
      valid && "is-valid",
      invalid && "is-invalid"
    );
    const id = _id || `dr-radio-${shortid.generate()}`;
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
    );
  }
}
FormRadio.defaultProps = {
  onChange: () => {}
};
export default FormRadio;
