import { h, Component } from "preact"
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "../../index"
interface DropupExampleState {
  open: boolean
}
/**
 * ## Drop-up
 *
 * Turning dropdown menus into drop-up menus can be easily achieved using the `dropup` prop applied on the `Dropdown` component.
 */
export default class DropupExample extends Component<{}, DropupExampleState> {
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
      <Dropdown open={this.state.open} toggle={this.toggle} dropup>
        <DropdownToggle>Dropup</DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Action</DropdownItem>
          <DropdownItem>Another action</DropdownItem>
          <DropdownItem>Something else here</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    )
  }
}
