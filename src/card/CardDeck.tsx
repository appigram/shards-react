import React, { HTMLAttributes } from "react"
import classNames from "classnames"
interface CardDeckProps extends HTMLAttributes<{}> {
  tag?: ((...args: any[]) => any) | string
  className?: string
}
const CardDeck: React.FunctionComponent<CardDeckProps> = props => {
  const { className, tag: Tag, ...attrs } = props
  const classes = classNames(className, "card-deck")
  // @ts-ignore idk
  return <Tag {...attrs} className={classes} />
}
CardDeck.defaultProps = {
  tag: "div"
}
export default CardDeck
