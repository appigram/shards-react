import { h, Component } from "preact"
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "../../index"
interface DropdownExampleState {
  open: boolean
}
/**
 * ## Basic Example
 *
 * You can create dropdowns using the `Dropdown` component.
 */
export default class DropdownExample extends Component<
  {},
  DropdownExampleState
> {
  constructor(props: {}) {
    super(props)
    this.toggle = this.toggle.bind(this)
    this.state = { open: false }
  }
  public toggle() {
    this.setState((prevState: Partial<DropdownExampleState>) => {
      return { open: !prevState.open }
    })
  }
  public render() {
    return (
      <Dropdown open={this.state.open} toggle={this.toggle}>
        <DropdownToggle>Dropdown</DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Action</DropdownItem>
          <DropdownItem>Another action</DropdownItem>
          <DropdownItem>Something else here</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    )
  }
}
