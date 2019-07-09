import React from "react";
import classNames from "classnames";
type NavLinkProps = {
  disabled?: boolean,
  active?: boolean,
  className?: string,
  onClick?: (...args: any[]) => any,
  href?: any,
  tag?: ((...args: any[]) => any) | string,
  innerRef?: object | ((...args: any[]) => any) | string
};
class NavLink extends React.Component<NavLinkProps, {}> {
  constructor(props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
  }
  handleOnClick(e) {
    if (this.props.disabled) {
      e.preventDefault();
      return;
    }
    if (this.props.href === "#") {
      e.preventDefault();
    }
    if (this.props.onClick) {
      this.props.onClick(e);
    }
  }
  render() {
    let {
      className,
      active,
      disabled,
      tag: Tag,
      innerRef,
      ...attrs
    } = this.props;
    const classes = classNames(
      className,
      "nav-link",
      disabled && "disabled",
      active && "active"
    );
    return (
      <Tag
        {...attrs}
        ref={innerRef}
        onClick={this.handleOnClick}
        className={classes}
      />
    );
  }
}
NavLink.defaultProps = {
  tag: "a"
};
export default NavLink;
