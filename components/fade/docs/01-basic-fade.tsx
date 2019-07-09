import React from "react";
import { Fade, Button } from "shards-react";
type BasicFadeExampleState = {
  visible: boolean
};
/**
 * ## Basic Example
 */
export default class BasicFadeExample extends React.Component<
  {},
  BasicFadeExampleState
> {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      visible: true
    };
  }
  toggle() {
    this.setState({
      visible: !this.state.visible
    });
  }
  render() {
    return (
      <div>
        <Button onClick={this.toggle} className="mb-2">
          Toggle Fade
        </Button>
        <Fade in={this.state.visible}>
          Etiam semper convallis tortor, in euismod orci vehicula sit amet.
        </Fade>
      </div>
    );
  }
}
