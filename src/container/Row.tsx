import { h } from "preact"
import classNames from "classnames"
import { HTMLTag, HTMLProps } from "../html"
interface RowProps extends HTMLProps<"div"> {
  noGutters?: boolean
  tag?: HTMLTag
}
const Row = (props: RowProps) => {
  const { noGutters, form, className, tag, ...attrs } = props
  const classes = classNames(
    className,
    noGutters ? "no-gutters" : null,
    form ? "form-row" : "row"
  )
  const Tag = tag!

  return <Tag {...attrs} className={classes} />
}
Row.defaultProps = {
  tag: "div"
}
export default Row
