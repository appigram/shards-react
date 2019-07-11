import { h, Component } from "preact"
import { DatePicker } from "../../index"
interface DatepickerExcludedDatesExampleState {
  startDate: Date
}
/**
 * ## Excluded Dates
 *
 * You can disable certain dates using the `excludeDates` prop.
 */
export default class DatepickerExcludedDatesExample extends Component<
  {},
  DatepickerExcludedDatesExampleState
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
    const today = new Date()
    const yesterday = new Date(today.setDate(today.getDate() - 1))
    return (
      <div>
        <p className="mb-2">
          Selected date: <strong>{this.state.startDate.toString()}</strong>
        </p>
        <DatePicker
          size="sm"
          selected={this.state.startDate}
          onChange={this.handleOnChange}
          excludeDates={[today, yesterday]}
          dropdownMode="select"
        />
      </div>
    )
  }
}
