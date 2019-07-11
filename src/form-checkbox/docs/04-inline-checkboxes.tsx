import { h, Component } from "preact"
import { FormCheckbox } from "../../index"
interface InlineCheckboxesState {
  basketball: boolean
  football: boolean
  tennis: boolean
}
/**
 * ## Inline Display
 *
 * Checkboxes can also be displayed inline using the `inline` prop.
 */
export default class InlineCheckboxes extends Component<
  {},
  InlineCheckboxesState
> {
  constructor(props: {}) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      basketball: false,
      football: false,
      tennis: false
    }
  }
  public handleChange(e: Event, fruit: string) {
    const newState: Partial<InlineCheckboxesState> = {}
    // @ts-ignore
    newState[fruit] = !this.state[fruit]
    this.setState({ ...this.state, ...newState })
  }
  public render() {
    return (
      <div>
        <p>Select your favorite fruits:</p>
        <FormCheckbox
          inline
          checked={this.state.basketball}
          onChange={e => this.handleChange(e, "basketball")}
        >
          Basketball
        </FormCheckbox>
        <FormCheckbox
          inline
          checked={this.state.football}
          onChange={e => this.handleChange(e, "football")}
        >
          Football
        </FormCheckbox>
        <FormCheckbox
          inline
          checked={this.state.tennis}
          onChange={e => this.handleChange(e, "tennis")}
        >
          Tennis
        </FormCheckbox>
      </div>
    )
  }
}
