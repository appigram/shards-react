import { h, Component } from "preact"
import { FormTextarea } from "../../index"
interface BasicFormTextareaState {
  value: string | null
}
/**
 * ## Basic Example
 */
export default class BasicFormTextarea extends Component<
  {},
  BasicFormTextareaState
> {
  constructor(props: {}) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.state = { value: null }
  }
  public handleChange(e: Event) {
    const target = e.target as HTMLTextAreaElement
    this.setState({ value: target.value })
  }
  public render() {
    const { value } = this.state
    return (
      <div>
        <p className="mb-2">
          {(value && `🗣 ${value}`) || "🤔 Waiting for you to say something..."}
        </p>
        <FormTextarea onChange={this.handleChange} />
      </div>
    )
  }
}
