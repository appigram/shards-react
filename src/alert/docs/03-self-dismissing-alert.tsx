import { h, Component } from "preact"
import { Alert, Button } from "../../index"
type SelfDismissingAlertExampleState = {
  visible: boolean
  countdown: number
  timeUntilDismissed: number
} & any &
  any & { visible: boolean; countdown: number; timeUntilDismissed: number }
/**
 * ## Self Dismissing Alert
 *
 * Self-dismissible alerts can also be created using a few state tricks.
 */
export default class SelfDismissingAlertExample extends Component<
  {},
  SelfDismissingAlertExampleState
> {
  private interval: number | null

  constructor(props: {}) {
    super(props)
    this.interval = null
    this.state = {
      visible: false,
      countdown: 0,
      timeUntilDismissed: 5
    }
    this.showAlert = this.showAlert.bind(this)
    this.handleTimeChange = this.handleTimeChange.bind(this)
    this.clearInterval = this.clearInterval.bind(this)
  }
  public showAlert() {
    this.clearInterval()
    this.setState({ visible: true, countdown: 0, timeUntilDismissed: 5 })
    this.interval = window.setInterval(this.handleTimeChange, 1000)
  }
  public handleTimeChange() {
    if (this.state.countdown < this.state.timeUntilDismissed - 1) {
      this.setState({
        ...this.state,
        ...{ countdown: this.state.countdown + 1 }
      })
      return
    }
    this.setState({ ...this.state, ...{ visible: false } })
    this.clearInterval()
  }
  public clearInterval() {
    if (this.interval) clearInterval(this.interval)
    this.interval = null
  }
  public render() {
    return (
      <div>
        <Alert className="mb-3" open={this.state.visible} theme="success">
          Success! This alert will will be dismissed in{" "}
          {this.state.timeUntilDismissed - this.state.countdown} seconds!
        </Alert>
        <Button onClick={this.showAlert}>Show Alert!</Button>
      </div>
    )
  }
}
