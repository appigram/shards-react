import React from "react"
import { Progress } from "../../index"
/**
 * ## Basic Example
 *
 * You can change the bar's color using the `theme` prop. The default value is `primary`.
 */
export default function BasicProgress() {
  return <Progress theme="primary" value={50} />
}
