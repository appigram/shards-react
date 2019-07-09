import React, { HTMLAttributes } from "react"
import classNames from "classnames"
interface PopoverHeaderProps extends HTMLAttributes<{}> {
  className?: string
  tag?: ((...args: any[]) => any) | string
}
const PopoverHeader: React.FunctionComponent<PopoverHeaderProps> = props => {
  const { className, tag: Tag, ...attrs } = props
  const classes = classNames(className, "popover-header")
  // @ts-ignore idk
  return <Tag {...attrs} className={classes} />
}
PopoverHeader.defaultProps = {
  tag: "h3"
}
export default PopoverHeader
