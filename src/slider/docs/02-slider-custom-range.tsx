import React from "react"
import { Slider } from "../../index"
interface SliderCustomRangeState {
  value: number
}
/**
 * ## Custom Range
 *
 * You can provide a custom range for the slider using the `range` prop.
 */
export default class SliderCustomRange extends React.Component<
  {},
  SliderCustomRangeState
> {
  constructor(props: {}) {
    super(props)
    this.handleSlide = this.handleSlide.bind(this)
    this.state = { value: 1300 }
  }
  public handleSlide(e: [string, string]) {
    this.setState({
      value: parseFloat(e[0])
    })
  }
  public render() {
    return (
      <div>
        <p>Value: {this.state.value}</p>
        <Slider
          onSlide={this.handleSlide}
          connect={[true, false]}
          start={[this.state.value]}
          range={{ min: 0, max: 2500 }}
        />
      </div>
    )
  }
}
