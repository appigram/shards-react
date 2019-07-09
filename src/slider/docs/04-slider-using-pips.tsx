import React from "react"
import { Slider } from "../../index"
interface SliderCustomRangeState {
  value: number[]
}
/**
 * ## Using Pips
 *
 * Pips can also be enabled using the `pips` prop.
 */
export default class SliderCustomRange extends React.Component<
  {},
  SliderCustomRangeState
> {
  constructor(props: {}) {
    super(props)
    this.handleSlide = this.handleSlide.bind(this)
    this.state = { value: [20, 80] }
  }
  public handleSlide(e: [string, string]) {
    this.setState({
      value: [parseFloat(e[0]), parseFloat(e[1])]
    })
  }
  public render() {
    return (
      <div>
        <p>Value: {JSON.stringify(this.state.value)}</p>
        <Slider
          connect
          pips={{ mode: "steps", stepped: true, density: 3 }}
          onSlide={this.handleSlide}
          start={this.state.value}
          range={{ min: 0, max: 100 }}
        />
      </div>
    )
  }
}
