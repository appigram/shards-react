import { h, Ref, Component } from "preact"
import classNames from "classnames"
import { HTMLTag, HTMLProps } from "../html"

interface ButtonProps extends Omit<HTMLProps<"button">, "size"> {
  theme?: string
  outline?: boolean
  pill?: boolean
  squared?: boolean
  active?: boolean
  block?: boolean
  disabled?: boolean
  tag?: HTMLTag
  size?: string
  innerRef?: Ref<HTMLButtonElement>
}
/**
 * Buttons are Bootstrap's core component for triggering various actions. In Shards, they're very flexible, support multiple sizes, styles, states and many more.
 */
export default class Button extends Component<ButtonProps, {}> {
  constructor(props: ButtonProps) {
    super(props)
    this.onClick = this.onClick.bind(this)
  }
  public static defaultProps = {
    theme: "primary",
    tag: "button"
  }
  public onClick(e: MouseEvent) {
    if (this.props.disabled) {
      e.preventDefault()
      return
    }
    if (this.props.onClick) {
      this.props.onClick(e)
    }
  }
  public render() {
    // tslint:disable: prefer-const
    let {
      className,
      theme,
      size,
      pill,
      outline,
      squared,
      active,
      disabled,
      innerRef,
      tag,
      block,
      ...attrs
    } = this.props
    // tslint:enable: prefer-const
    const classes = classNames(
      className,
      "btn",
      theme && `btn-${outline ? "outline-" : ""}${theme}`,
      size && `btn-${size}`,
      pill && "btn-pill",
      squared && "btn-squared",
      block && "btn-block",
      active && "active"
    )
    const Tag = tag === "button" && attrs.href ? "a" : tag!
    const tagType = Tag === "button" && attrs.onClick ? "button" : undefined
    return (
      <Tag
        ref={innerRef}
        type={tagType}
        {...attrs}
        className={classes}
        disabled={disabled}
        onClick={this.onClick}
      />
    )
  }
}
