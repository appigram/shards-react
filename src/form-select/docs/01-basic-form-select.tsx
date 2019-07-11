import { h } from "preact"
import { FormSelect } from "../../index"
/**
 * ## Form Select
 *
 * Select components can be created using the `FormSelect` component.
 */
export default function FormSelectDemo() {
  return (
    <FormSelect>
      <option value="first">This is the first option</option>
      <option value="second">This is the second option.</option>
      <option value="third" disabled>
        This option is disabled.
      </option>
    </FormSelect>
  )
}
