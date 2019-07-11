import { h } from "preact"
import classNames from "classnames"
import { HTMLTag, HTMLProps } from "../html"

interface CardImgOverlayProps extends HTMLProps<"div"> {
  tag?: HTMLTag
}
const CardImgOverlay = (props: CardImgOverlayProps) => {
  const { className, tag, ...attrs } = props
  const classes = classNames(className, "card-img-overlay")
  const Tag = tag!

  return <Tag {...attrs} className={classes} />
}
CardImgOverlay.defaultProps = {
  tag: "div"
}
export default CardImgOverlay
