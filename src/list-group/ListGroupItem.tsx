import React, { LiHTMLAttributes } from "react"
import classNames from "classnames"
interface ListGroupItemProps extends LiHTMLAttributes<{}> {
  active?: boolean
  disabled?: boolean
  theme?: string
  action?: boolean
  className?: string
  tag?: ((...args: any[]) => any) | string
}
const ListGroupItem = (props: ListGroupItemProps) => {
  const {
    className,
    tag: Tag,
    active,
    action,
    disabled,
    theme,
    ...attrs
  } = props
  const classes = classNames(
    className,
    active && "active",
    disabled && "disabled",
    action && "list-group-item-action",
    theme && `list-group-item-${theme}`,
    "list-group-item"
  )

  if (disabled) {
    return (
      // @ts-ignore idk
      <Tag
        {...attrs}
        onClick={(e: Event) => e.preventDefault()}
        className={classes}
      />
    )
  } else {
    // @ts-ignore idk
    return <Tag {...attrs} className={classes} />
  }
}
ListGroupItem.defaultProps = {
  tag: "li"
}
export default ListGroupItem
