import { h, Component } from "preact"
import { DatePicker } from "../../index"
interface DatepickerExampleState {
  startDate: Date
}
/**
 * ## Basic Example
 *
 * You can create a datepicker using the `DatePicker` component.
 */
export default class DatepickerExample extends Component<
  {},
  DatepickerExampleState
> {
  constructor(props: {}) {
    super(props)
    this.handleOnChange = this.handleOnChange.bind(this)
    this.state = {
      startDate: new Date()
    }
  }
  public handleOnChange(val: Date) {
    this.setState({
      startDate: new Date(val)
    })
  }
  public render() {
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
    )
  }
}
