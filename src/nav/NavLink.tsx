import { h, Ref, Component } from "preact"
import classNames from "classnames"
import { HTMLTag, HTMLProps } from "../html"
interface NavLinkProps extends HTMLProps<"a"> {
  disabled?: boolean
  active?: boolean
  href?: string
  tag?: HTMLTag
  innerRef?: Ref<HTMLLinkElement>
}
export default class NavLink extends Component<NavLinkProps, {}> {
  public static defaultProps = {
    tag: "a"
  }
  constructor(props: NavLinkProps) {
    super(props)
    this.handleOnClick = this.handleOnClick.bind(this)
  }
  public handleOnClick(e: MouseEvent) {
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
    const { className, active, disabled, tag, innerRef, ...attrs } = this.props
    const classes = classNames(
      className,
      "nav-link",
      disabled && "disabled",
      active && "active"
    )
    const Tag = tag!
    return (
      <Tag
        {...attrs}
        ref={innerRef}
        onClick={this.handleOnClick}
        className={classes}
      />
    )
  }
}
