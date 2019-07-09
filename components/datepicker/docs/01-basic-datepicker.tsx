import React from "react";
import { DatePicker } from "shards-react";
type DatepickerExampleState = {
  startDate: Date
};
/**
 * ## Basic Example
 *
 * You can create a datepicker using the `DatePicker` component.
 */
export default class DatepickerExample extends React.Component<
  {},
  DatepickerExampleState
> {
  constructor(props) {
    super(props);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.state = {
      startDate: new Date()
    };
  }
  handleOnChange(val) {
    this.setState({
      startDate: new Date(val)
    });
  }
  render() {
    return (
      <div>
        <p className="mb-2">
          Selected date: <strong>{this.state.startDate.toString()}</strong>
        </p>
        <DatePicker
          size="sm"
          selected={this.state.startDate}
          onChange={this.handleOnChange}
          dropdownMode="select"
        />
      </div>
    );
  }
}
