import { h } from "preact"
import {
  Button,
  ButtonGroup,
  ButtonToolbar,
  FormInput,
  InputGroup
} from "../../index"
export default function ButtonToolbarExample() {
  return (
    <ButtonToolbar>
      <ButtonGroup size="sm">
        <Button>Create</Button>
        <Button>Edit</Button>
      </ButtonGroup>

      <InputGroup size="sm" className="ml-auto">
        <FormInput placeholder="Search..." />
      </InputGroup>
    </ButtonToolbar>
  )
}
