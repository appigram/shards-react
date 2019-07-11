import { h } from "preact"
import classNames from "classnames"
import { HTMLTag, HTMLProps } from "../html"
interface BadgeProps extends HTMLProps<"a"> {
  theme?: string
  outline?: boolean
  pill?: boolean
  tag?: HTMLTag
}
const Badge = (props: BadgeProps) => {
  // tslint:disable-next-line: prefer-const
  let { tag, className, theme, pill, outline, ...attrs } = props
  const classes = classNames(
    className,
    "badge",
    theme && !outline && `badge-${theme}`,
    outline && `badge-outline-${theme}`,
    pill && "badge-pill"
  )
  const Tag = tag === "span" && attrs.href ? "a" : tag!

  return <Tag {...attrs} className={classes} />
}
Badge.defaultProps = {
  theme: "primary",
  pill: false,
  outline: false,
  tag: "span"
}
export default Badge
