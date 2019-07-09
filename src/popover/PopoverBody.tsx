import React, { HTMLAttributes } from "react"
import classNames from "classnames"
interface PopoverBodyProps extends HTMLAttributes<{}> {
  className?: string
  tag?: ((...args: any[]) => any) | string
}
const PopoverBody: React.FunctionComponent<PopoverBodyProps> = props => {
  const { className, tag: Tag, ...attrs } = props
  const classes = classNames(className, "popover-body")
  // @ts-ignore idk
  return <Tag {...attrs} className={classes} />
}
PopoverBody.defaultProps = {
  tag: "div"
}
export default PopoverBody
