import React, { ButtonHTMLAttributes } from "react"
import classNames from "classnames"
import omit from "lodash.omit"
import { DropdownContext } from "./DropdownContext"
interface DropdownItemProps extends ButtonHTMLAttributes<{}> {
  active?: boolean
  disabled?: boolean
  divider?: boolean
  header?: boolean
  onClick?(e: React.MouseEvent): void
  className?: string
  toggle?: boolean
  tag?: ((...args: any[]) => any) | string
}
class DropdownItem extends React.Component<DropdownItemProps, {}> {
  public static defaultProps = {
    tag: "button",
    toggle: true
  }
  constructor(props: DropdownItemProps) {
    super(props)
    this.onClick = this.onClick.bind(this)
    this.getTabIndex = this.getTabIndex.bind(this)
  }
  public onClick(e: React.MouseEvent) {
    if (this.props.disabled || this.props.header || this.props.divider) {
      e.preventDefault()
      return
    }
    if (this.props.onClick) {
      this.props.onClick(e)
    }
    if (this.props.toggle) {
      this.context.toggle(e)
    }
  }
  public getTabIndex() {
    if (this.props.disabled || this.props.header || this.props.divider) {
      return "-1"
    }
    return "0"
  }
  public render() {
    // tslint:disable-next-line: prefer-const
    let { className, divider, tag: Tag, header, active, ...attrs } = omit(
      this.props,
      ["toggle"]
    )
    const tabIndex = this.getTabIndex()
    const classes = classNames(
      className,
      attrs.disabled && "disabled",
      !divider && !header && "dropdown-item",
      header && "dropdown-header",
      divider && "dropdown-divider",
      active && "active"
    )
    const attrsOther = attrs as any
    if (Tag === "button") {
      if (header) {
        Tag = "h6"
      } else if (divider) {
        Tag = "div"
      } else if (attrsOther.href) {
        Tag = "a"
      }
    }
    return (
      // @ts-ignore idk
      <Tag
        type={
          Tag === "button" && (attrs.onClick || attrsOther.toggle)
            ? "button"
            : undefined
        }
        {...attrs}
        tabIndex={tabIndex}
        className={classes}
        onClick={this.onClick}
      />
    )
  }
}
DropdownItem.contextType = DropdownContext
export default DropdownItem
