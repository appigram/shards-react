import React, { ButtonHTMLAttributes, Ref } from "react"
import classNames from "classnames"
interface ButtonProps extends ButtonHTMLAttributes<{}> {
  className?: string
  theme?: string
  size?: string
  outline?: boolean
  pill?: boolean
  squared?: boolean
  active?: boolean
  block?: boolean
  disabled?: boolean
  tag?: ((...args: any[]) => any) | string
  innerRef?: Ref<HTMLButtonElement>
}
/**
 * Buttons are Bootstrap's core component for triggering various actions. In Shards, they're very flexible, support multiple sizes, styles, states and many more.
 */
export default class Button extends React.Component<ButtonProps, {}> {
  constructor(props: ButtonProps) {
    super(props)
    this.onClick = this.onClick.bind(this)
  }
  public static defaultProps = {
    theme: "primary",
    tag: "button"
  }
  public onClick(e: React.MouseEvent) {
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
      tag: Tag,
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
    Tag = (attrs as any).href && Tag === "button" ? "a" : Tag
    const tagType = Tag === "button" && attrs.onClick ? "button" : undefined
    return (
      // @ts-ignore idk
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
