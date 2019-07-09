import React, { HTMLAttributes } from "react"
import classNames from "classnames"
interface CardImgOverlayProps extends HTMLAttributes<{}> {
  className?: string
  tag?: ((...args: any[]) => any) | string
}
const CardImgOverlay: React.FunctionComponent<CardImgOverlayProps> = props => {
  const { className, tag: Tag, ...attrs } = props
  const classes = classNames(className, "card-img-overlay")
  // @ts-ignore idk
  return <Tag {...attrs} className={classes} />
}
CardImgOverlay.defaultProps = {
  tag: "div"
}
export default CardImgOverlay
