import { h } from "preact"
import { Button, ButtonGroup } from "../../index"
/**
 * ## Basic Example
 *
 * You can create button groups using the `ButtonGroup` component.
 */
export default function ButtonGroupExample() {
  return (
    <ButtonGroup>
      <Button>Left</Button>
      <Button>Middle</Button>
      <Button>Right</Button>
    </ButtonGroup>
  )
}
