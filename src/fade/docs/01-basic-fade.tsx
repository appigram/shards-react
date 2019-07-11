import { h, Component } from "preact"
import { Fade, Button } from "../../index"
interface BasicFadeExampleState {
  visible: boolean
}
/**
 * ## Basic Example
 */
export default class BasicFadeExample extends Component<
  {},
  BasicFadeExampleState
> {
  constructor(props: {}) {
    super(props)
    this.toggle = this.toggle.bind(this)
    this.state = {
      visible: true
    }
  }
  public toggle() {
    this.setState({
      visible: !this.state.visible
    })
  }
  public render() {
    return (
      <div>
        <Button onClick={this.toggle} className="mb-2">
          Toggle Fade
        </Button>
        <Fade in={this.state.visible}>
          Etiam semper convallis tortor, in euismod orci vehicula sit amet.
        </Fade>
      </div>
    )
  }
}
