import React from "react"
import ReactDatePicker, { ReactDatePickerProps } from "react-datepicker"
import classNames from "classnames"
import "react-datepicker/dist/react-datepicker.css"
import "./DatePicker.css"

interface DatePickerProps extends ReactDatePickerProps {
  size: string
}

const DatePicker: React.FunctionComponent<DatePickerProps> = props => {
  const { className, size, ...attrs } = props
  const classes = classNames(
    className,
    "form-control",
    size && `form-control-${size}`
  )
  if (!attrs.dropdownMode) {
    attrs.dropdownMode = "select"
  }
  return <ReactDatePicker {...props} className={classes} />
}
export default DatePicker
