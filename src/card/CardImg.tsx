import React, { ImgHTMLAttributes } from "react"
import classNames from "classnames"
interface CardImgProps extends ImgHTMLAttributes<{}> {
  top?: boolean
  bottom?: boolean
  className?: string
  tag?: ((...args: any[]) => any) | string
}
const CardImg = (props: CardImgProps) => {
  const { className, top, bottom, tag: Tag, ...attrs } = props
  let cardImgClass = ""
  if (top) {
    cardImgClass = "card-img-top"
  }
  if (bottom) {
    cardImgClass = "card-img-bottom"
  }
  cardImgClass = classNames(className, cardImgClass)
  // @ts-ignore idk
  return <Tag {...attrs} className={cardImgClass} />
}
CardImg.defaultProps = {
  tag: "img"
}
export default CardImg
