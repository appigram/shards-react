import React from "react"
import { FormCheckbox } from "../../index"
interface BasicToggleExampleState {
  checked: boolean
}
/**
 * ## Basic Toggles
 *
 * Checkboxes can be turned into toggles by using the `toggle` prop.
 */
class BasicToggleExample extends React.Component<{}, BasicToggleExampleState> {
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
        checked={this.state.checked}
        onChange={this.handleChange}
      >
        🚀 Enable Rockets
      </FormCheckbox>
    )
  }
}
export default BasicToggleExample
