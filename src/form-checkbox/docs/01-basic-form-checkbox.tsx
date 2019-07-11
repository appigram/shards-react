import { h, Component } from "preact"
import { FormCheckbox } from "../../index"
interface FormCheckboxExampleState {
  orange: boolean
  lemon: boolean
  kiwi: boolean
}
/**
 * ## Basic Checkbox
 */
export default class FormCheckboxExample extends Component<
  {},
  FormCheckboxExampleState
> {
  constructor(props: {}) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      orange: false,
      lemon: false,
      kiwi: false
    }
  }
  public handleChange(e: Event, fruit: string) {
    const newState: Partial<FormCheckboxExampleState> = {}
    // @ts-ignore
    newState[fruit] = !this.state[fruit]
    this.setState({ ...this.state, ...newState })
  }
  public render() {
    return (
      <div>
        <p>Select your favorite fruits:</p>
        <FormCheckbox
          checked={this.state.orange}
          onChange={e => this.handleChange(e, "orange")}
        >
          Orange
        </FormCheckbox>
        <FormCheckbox
          checked={this.state.lemon}
          onChange={e => this.handleChange(e, "lemon")}
        >
          Lemon
        </FormCheckbox>
        <FormCheckbox
          checked={this.state.kiwi}
          onChange={e => this.handleChange(e, "kiwi")}
        >
          Kiwi
        </FormCheckbox>
        <span className="d-block mt-3">
          <strong>Selected fruits:</strong>{" "}
          <pre>{JSON.stringify(this.state)}</pre>
        </span>
      </div>
    )
  }
}
