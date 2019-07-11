import { h, Component } from "preact"
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button
} from "../../index"
interface DropdownSplitExampleState {
  open: boolean
}
/**
 * ## Split Buttons
 *
 * Using the `group` prop applied on the `Dropdown` component and the `split` prop applied on the `DropdownToggle` component you can create split-type dropdowns.
 */
export default class DropdownSplitExample extends Component<
  {},
  DropdownSplitExampleState
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
      <Dropdown open={this.state.open} toggle={this.toggle} group>
        <Button>Dropdown</Button>
        <DropdownToggle split />
        <DropdownMenu>
          <DropdownItem>Action</DropdownItem>
          <DropdownItem>Another action</DropdownItem>
          <DropdownItem>Something else here</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    )
  }
}
