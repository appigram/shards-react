import React from "react";
import { Button, Modal, ModalBody, ModalHeader } from "shards-react";
type BasicModalExampleState = {
  open: boolean
};
export default class BasicModalExample extends React.Component<
  {},
  BasicModalExampleState
> {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState({
      open: !this.state.open
    });
  }
  render() {
    const { open } = this.state;
    return (
      <div>
        <Button onClick={this.toggle}>Click Me!</Button>
        <Modal open={open} toggle={this.toggle}>
          <ModalHeader>Header</ModalHeader>
          <ModalBody>👋 Hello there!</ModalBody>
        </Modal>
      </div>
    );
  }
}
