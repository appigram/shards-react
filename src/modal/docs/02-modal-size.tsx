import { h, Component } from "preact"
import { Button, Modal, ModalBody, ModalHeader } from "../../index"
interface ModalSizeExampleState {
  open: boolean
}
/**
 * ## Modal Size
 *
 * The modal's size can be adjusted via the `size` prop. You can use `sm` for small and `lg` for large.
 */
export default class ModalSizeExample extends Component<
  {},
  ModalSizeExampleState
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
        <Button onClick={this.toggle}>Small Modal!</Button>
        <Modal size="sm" open={open} toggle={this.toggle}>
          <ModalHeader>Header</ModalHeader>
          <ModalBody>👋 Hello there!</ModalBody>
        </Modal>
      </div>
    )
  }
}
