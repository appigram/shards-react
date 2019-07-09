import React, { AriaAttributes, HTMLAttributes } from "react"
import { Reference } from "react-popper"
import classNames from "classnames"
import Button from "../button"
import { DropdownContext } from "./DropdownContext"
interface DropdownToggleProps extends HTMLAttributes<{}>, AriaAttributes {
  caret?: boolean
  theme?: string
  className?: string
  disabled?: boolean
  onClick?(e: React.MouseEvent): void
  "aria-haspopup"?: boolean
  split?: boolean
  nav?: boolean
  tag?: ((...args: any[]) => any) | string
}
class DropdownToggle extends React.Component<DropdownToggleProps, {}> {
  public static defaultProps = {
    "aria-haspopup": true,
    theme: "primary"
  }
  constructor(props: DropdownToggleProps) {
    super(props)
    this.onClick = this.onClick.bind(this)
  }
  public onClick(e: React.MouseEvent) {
    if (this.props.disabled) {
      e.preventDefault()
      return
    }
    if (this.props.nav && !this.props.tag) {
      e.preventDefault()
    }
    if (this.props.onClick) {
      this.props.onClick(e)
    }
    this.context.toggle(e)
  }
  public render() {
    const { className, theme, caret, split, nav, tag, ...attrs } = this.props
    const ariaLabel = attrs["aria-label"] || "Toggle Dropdown"
    const classes = classNames(
      className,
      (caret || split) && "dropdown-toggle",
      split && "dropdown-toggle-split",
      nav && "nav-link"
    )
    const children = attrs.children || (
      <span className="sr-only">{ariaLabel}</span>
    )
    let Tag: any
    const attrsOther = attrs as any
    if (nav && !tag) {
      Tag = "a"
      attrsOther.href = "#"
    } else if (!tag) {
      Tag = Button
      attrsOther.theme = theme
    } else {
      Tag = tag
    }
    if (this.context.inNavbar) {
      return (
        <Reference>
          {() => (
            <Tag
              {...attrsOther}
              className={classes}
              onClick={this.onClick}
              aria-expanded={this.context.isOpen}
            >
              {children}
            </Tag>
          )}
        </Reference>
      )
    }
    return (
      <Reference>
        {() => (
          <Tag
            {...attrsOther}
            className={classes}
            onClick={this.onClick}
            aria-expanded={this.context.isOpen}
          >
            {children}
          </Tag>
        )}
      </Reference>
    )
  }
}
DropdownToggle.contextType = DropdownContext
export default DropdownToggle
