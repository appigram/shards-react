import React from "react"
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "../../index"
interface DropdownThemeExampleState {
  open: boolean
}
/**
 * ## Theme Color
 *
 * Changing the theme color for the `DropdownToggle` component can be achieved via the `theme` prop.
 */
export default class DropdownThemeExample extends React.Component<
  {},
  DropdownThemeExampleState
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
      <Dropdown open={this.state.open} toggle={this.toggle}>
        <DropdownToggle theme="success">Dropdown</DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Action</DropdownItem>
          <DropdownItem>Another action</DropdownItem>
          <DropdownItem>Something else here</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    )
  }
}
