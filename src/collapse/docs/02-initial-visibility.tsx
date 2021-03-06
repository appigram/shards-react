import React from "react"
import Button from ".."
import Collapse from ".."
interface CollapseInitialVisibilityExampleState {
  collapse: boolean
}
/**
 * ## Initial Visibility
 *
 * You can control the visibility of your collapsed element via the `open` prop.
 */
export default class CollapseInitialVisibilityExample extends React.Component<
  {},
  CollapseInitialVisibilityExampleState
> {
  constructor(props: {}) {
    super(props)
    this.toggle = this.toggle.bind(this)
    this.state = { collapse: true }
  }
  public toggle() {
    this.setState({ collapse: !this.state.collapse })
  }
  public render() {
    return (
      <div>
        <Button onClick={this.toggle}>Toggle</Button>
        <Collapse open={this.state.collapse}>
          <div className="p-3 mt-3 border rounded">
            <h5>😁 I am already visible!</h5>
            <span>
              In sagittis nibh non arcu viverra, nec imperdiet quam suscipit.
              Sed porta eleifend scelerisque. Vestibulum dapibus quis arcu a
              facilisis.
            </span>
          </div>
        </Collapse>
      </div>
    )
  }
}
