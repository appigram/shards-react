import { h } from "preact"
import classNames from "classnames"
import { HTMLTag, HTMLProps } from "../html"
interface CardDeckProps extends HTMLProps<"div"> {
  tag?: HTMLTag
}
const CardDeck = (props: CardDeckProps) => {
  const { className, tag, ...attrs } = props
  const classes = classNames(className, "card-deck")
  const Tag = tag!

  return <Tag {...attrs} className={classes} />
}
CardDeck.defaultProps = {
  tag: "div"
}
export default CardDeck
