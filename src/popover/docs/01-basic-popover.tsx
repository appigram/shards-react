import React from "react"
import { Button, Popover, PopoverBody, PopoverHeader } from "../../index"
interface PopoverExampleState {
  open: boolean
}
/**
 * ## Basic Example
 *
 * Popovers can be created using the `Popover` component.
 */
export default class PopoverExample extends React.Component<
  {},
  PopoverExampleState
> {
  constructor(props: {}) {
    super(props)
    this.toggle = this.toggle.bind(this)
    this.state = {
      open: false
    }
  }
  public toggle() {
    this.setState({
      open: !this.state.open
    })
  }
  public render() {
    return (
      <div>
        <Button id="popover-1" onClick={this.toggle}>
          Toggle
        </Button>
        <Popover
          placement="bottom"
          open={this.state.open}
          toggle={this.toggle}
          target="#popover-1"
        >
          <PopoverHeader>Title here</PopoverHeader>
          <PopoverBody>
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
            labore wes anderson cred nesciunt sapiente ea proident.
          </PopoverBody>
        </Popover>
      </div>
    )
  }
}
