import { h, Component } from "preact"
import { Alert } from "../../index"

interface DismissibleAlertExampleState {
  visible: boolean
}
/**
 * ## Dismissible Alerts
 *
 * Dismissible alerts allow you to hide them using an `X` button.
 */
export default class DismissibleAlertExample extends Component<
  {},
  DismissibleAlertExampleState
> {
  constructor(props: {}) {
    super(props)
    this.dismiss = this.dismiss.bind(this)
    this.state = { visible: true }
  }
  public render() {
    return (
      <Alert dismissible={this.dismiss} open={this.state.visible}>
        You can easily dismiss me using the <strong>close</strong> button &rarr;
      </Alert>
    )
  }
  public dismiss() {
    this.setState({ visible: false })
  }
}
