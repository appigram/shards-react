import React from "react"
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "../../index"
interface DropdownPositionExampleState {
  open: boolean
}
/**
 * ## Positioning
 *
 * By default `DropdownMenu`s are left aligned. However, you can change this by applying a right alignment using the `right` prop.
 */
export default class DropdownPositionExample extends React.Component<
  {},
  DropdownPositionExampleState
> {
  constructor(props: {}) {
    super(props)
    this.toggle = this.toggle.bind(this)
    this.state = { open: false }
  }
  public toggle() {
    this.setState(prevState => {
      return { open: !prevState.open }
    })
  }
  public render() {
    return (
      <Dropdown open={this.state.open} toggle={this.toggle} className="d-table">
        <DropdownToggle>Right Align</DropdownToggle>
        <DropdownMenu right>
          <DropdownItem>Action</DropdownItem>
          <DropdownItem>Another action</DropdownItem>
          <DropdownItem>Something else here</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    )
  }
}
