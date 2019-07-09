import React from "react"
import { Button } from "../../index"
/**
 * ## Active State
 *
 * Controlling the active state and appearance of your buttons can be achieved via the `active` prop.
 */
export default function ActiveButtonsExample() {
  return (
    <div className="example">
      <Button active theme="success">
        Success Active
      </Button>
      <Button active theme="danger">
        Danger Active
      </Button>
    </div>
  )
}
