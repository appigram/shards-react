import { h, Component } from "preact"
import { FormCheckbox } from "../../index"
interface SmallToggleExamplesState {
  checked: boolean
}
/**
 * ## Small Toggles
 *
 * A toggle's size can be adjusted using the `small` prop.
 */
class SmallToggleExamples extends Component<{}, SmallToggleExamplesState> {
  constructor(props: {}) {
    super(props)
    this.state = {
      checked: false
    }
    this.handleChange = this.handleChange.bind(this)
  }
  public handleChange() {
    this.setState({
      checked: !this.state.checked
    })
  }
  public render() {
    return (
      <FormCheckbox
        toggle
        small
        checked={this.state.checked}
        onChange={this.handleChange}
      >
        🚀 Enable (small) Rockets
      </FormCheckbox>
    )
  }
}
export default SmallToggleExamples
