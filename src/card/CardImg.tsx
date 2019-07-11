import { h } from "preact"
import classNames from "classnames"
import { HTMLTag, HTMLProps } from "../html"

interface CardImgProps extends HTMLProps<"img"> {
  top?: boolean
  bottom?: boolean
  tag?: HTMLTag
}
const CardImg = (props: CardImgProps) => {
  const { className, top, bottom, tag, ...attrs } = props
  let cardImgClass = ""
  if (top) {
    cardImgClass = "card-img-top"
  }
  if (bottom) {
    cardImgClass = "card-img-bottom"
  }
  cardImgClass = classNames(className, cardImgClass)
  const Tag = tag!

  return <Tag {...attrs} className={cardImgClass} />
}
CardImg.defaultProps = {
  tag: "img"
}
export default CardImg
