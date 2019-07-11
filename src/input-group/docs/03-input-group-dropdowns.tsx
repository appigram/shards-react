import { h, Component } from "preact"
import {
  InputGroup,
  FormInput,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu
} from "../../index"
interface InputGroupDropdownExampleState {
  open: boolean
}
/**
 * ## Input Group Dropdowns
 *
 * You can create dropdowns inside input groups via the `addonType` prop on the `Dropdown` component.
 */
export default class InputGroupDropdownExample extends Component<
  {},
  InputGroupDropdownExampleState
> {
  constructor(props: {}) {
    super(props)
    this.toggle = this.toggle.bind(this)
    this.state = {
      open: false
    }
  }
  public toggle() {
    this.setState({ open: !this.state.open })
  }
  public render() {
    return (
      <InputGroup>
        <FormInput />
        <Dropdown
          addonType="append"
          open={this.state.open}
          toggle={this.toggle}
        >
          <DropdownToggle caret>Dropdown</DropdownToggle>
          <DropdownMenu right>
            <DropdownItem>Action</DropdownItem>
            <DropdownItem>Another action</DropdownItem>
            <DropdownItem>Something else here</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </InputGroup>
    )
  }
}
