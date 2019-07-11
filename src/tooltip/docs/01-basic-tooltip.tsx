import { h, Component } from "preact"
import { Tooltip, Button } from "../../index"
interface TooltipExampleState {
  open: boolean
}
/**
 * ## Basic Example
 *
 * Tooltips can be created using the `Tooltip` component.
 */
export default class TooltipExample extends Component<{}, TooltipExampleState> {
  constructor(props: {}) {
    super(props)
    this.toggle = this.toggle.bind(this)
    this.state = { open: false }
  }
  public toggle() {
    this.setState({
      open: !this.state.open
    })
  }
  public render() {
    return (
      <div>
        <Button id="TooltipExample">Hover Me!</Button>
        <Tooltip
          open={this.state.open}
          target="#TooltipExample"
          toggle={this.toggle}
        >
          😁 Woo! I am a tooltip!
        </Tooltip>
      </div>
    )
  }
}
