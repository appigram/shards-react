import { h, Component } from "preact"
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "../../index"
interface DropdownSizeExampleState {
  dropdown1: boolean
  dropdown2: boolean
  dropdown3: boolean
}
/**
 * ## Sizing
 *
 * Using the `size` prop on the `Dropdown` component you can control the dropdown button's size.
 */
export default class DropdownSizeExample extends Component<
  {},
  DropdownSizeExampleState
> {
  constructor(props: {}) {
    super(props)
    this.toggle = this.toggle.bind(this)
    this.state = {
      dropdown1: false,
      dropdown2: false,
      dropdown3: false
    }
  }
  public toggle(nr: 1 | 2 | 3) {
    this.setState(prevState => {
      const newState: Partial<DropdownSizeExampleState> = {}
      // @ts-ignore missing index type
      newState[`dropdown${nr}`] = !prevState[`dropdown${nr}`]
      return { ...prevState, ...newState }
    })
  }
  public render() {
    return (
      <div style={{ display: "flex" }}>
        <Dropdown
          open={this.state.dropdown1}
          toggle={() => this.toggle(1)}
          size="lg"
          className="mr-2"
        >
          <DropdownToggle caret>Large</DropdownToggle>
          <DropdownMenu>
            <DropdownItem>Action</DropdownItem>
            <DropdownItem>Another action</DropdownItem>
            <DropdownItem>Something else here</DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <Dropdown
          open={this.state.dropdown2}
          toggle={() => this.toggle(2)}
          className="mr-2"
        >
          <DropdownToggle caret>Normal</DropdownToggle>
          <DropdownMenu>
            <DropdownItem>Action</DropdownItem>
            <DropdownItem>Another action</DropdownItem>
            <DropdownItem>Something else here</DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <Dropdown
          open={this.state.dropdown3}
          toggle={() => this.toggle(3)}
          size="sm"
          className="mr-2"
        >
          <DropdownToggle caret>Small</DropdownToggle>
          <DropdownMenu>
            <DropdownItem>Action</DropdownItem>
            <DropdownItem>Another action</DropdownItem>
            <DropdownItem>Something else here</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    )
  }
}
