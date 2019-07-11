import { h, Component } from "preact"
import { Button, Modal, ModalBody, ModalHeader } from "../../index"
interface BasicModalExampleState {
  open: boolean
}
export default class BasicModalExample extends Component<
  {},
  BasicModalExampleState
> {
  constructor(props: {}) {
    super(props)
    this.state = { open: false }
    this.toggle = this.toggle.bind(this)
  }
  public toggle() {
    this.setState({
      open: !this.state.open
    })
  }
  public render() {
    const { open } = this.state
    return (
      <div>
        <Button onClick={this.toggle}>Click Me!</Button>
        <Modal open={open} toggle={this.toggle}>
          <ModalHeader>Header</ModalHeader>
          <ModalBody>👋 Hello there!</ModalBody>
        </Modal>
      </div>
    )
  }
}
