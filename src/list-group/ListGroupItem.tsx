import { h } from "preact"
import classNames from "classnames"
import { HTMLProps, HTMLTag } from "../html"

interface ListGroupItemProps extends HTMLProps<"li"> {
  active?: boolean
  disabled?: boolean
  theme?: string
  tag?: HTMLTag
}
const ListGroupItem = (props: ListGroupItemProps) => {
  const { className, tag, active, action, disabled, theme, ...attrs } = props
  const Tag = tag!
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
      <Tag
        {...attrs}
        onClick={(e: Event) => e.preventDefault()}
        className={classes}
      />
    )
  } else {
    return <Tag {...attrs} className={classes} />
  }
}
ListGroupItem.defaultProps = {
  tag: "li"
}
export default ListGroupItem
