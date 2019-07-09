import React, { LinkHTMLAttributes, Ref } from "react"
import classNames from "classnames"
interface NavLinkProps extends LinkHTMLAttributes<{}> {
  disabled?: boolean
  active?: boolean
  className?: string
  href?: string
  tag?: ((...args: any[]) => any) | string
  innerRef?: Ref<HTMLLinkElement>
}
export default class NavLink extends React.Component<NavLinkProps, {}> {
  public static defaultProps = {
    tag: "a"
  }
  constructor(props: NavLinkProps) {
    super(props)
    this.handleOnClick = this.handleOnClick.bind(this)
  }
  public handleOnClick(e: React.MouseEvent) {
    if (this.props.disabled) {
      e.preventDefault()
      return
    }
    if (this.props.href === "#") {
      e.preventDefault()
    }
    if (this.props.onClick) {
      this.props.onClick(e)
    }
  }
  public render() {
    const {
      className,
      active,
      disabled,
      tag: Tag,
      innerRef,
      ...attrs
    } = this.props
    const classes = classNames(
      className,
      "nav-link",
      disabled && "disabled",
      active && "active"
    )
    return (
      // @ts-ignore idk
      <Tag
        {...attrs}
        ref={innerRef}
        onClick={this.handleOnClick}
        className={classes}
      />
    )
  }
}
