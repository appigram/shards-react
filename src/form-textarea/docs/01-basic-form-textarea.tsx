import React from "react"
import { FormTextarea } from "../../index"
interface BasicFormTextareaState {
  value: string | null
}
/**
 * ## Basic Example
 */
export default class BasicFormTextarea extends React.Component<
  {},
  BasicFormTextareaState
> {
  constructor(props: {}) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.state = { value: null }
  }
  public handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    this.setState({ value: e.target.value })
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
