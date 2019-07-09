import React from "react"
import { Slider } from "../../index"
/**
 * ## Basic Slider
 *
 * You can create basic sliders using the `Slider` component.
 */
export default function BasicSliderExample() {
  return (
    <Slider connect={[true, false]} start={[20]} range={{ min: 0, max: 100 }} />
  )
}
