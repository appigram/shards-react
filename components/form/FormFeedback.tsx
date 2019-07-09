import React from "react";
import classNames from "classnames";
type FormFeedbackProps = {
  tag?: string,
  className?: string,
  valid?: boolean,
  tooltip?: boolean
};
const FormFeedback: React.SFC<FormFeedbackProps> = props => {
  const { className, valid, tooltip, tag: Tag, ...attrs } = props;
  const validMode = tooltip ? "tooltip" : "feedback";
  const classes = classNames(
    className,
    valid ? `valid-${validMode}` : `invalid-${validMode}`
  );
  return <Tag {...attrs} className={classes} />;
};
FormFeedback.defaultProps = {
  tag: "div",
  valid: undefined
};
export default FormFeedback;
