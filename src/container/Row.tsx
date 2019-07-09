import React, { HTMLAttributes } from "react"
import classNames from "classnames"
interface RowProps extends HTMLAttributes<{}> {
  className?: string
  noGutters?: boolean
  form?: boolean
  tag?: ((...args: any[]) => any) | string
}
const Row: React.FunctionComponent<RowProps> = props => {
  const { noGutters, form, className, tag: Tag, ...attrs } = props
  const classes = classNames(
    className,
    noGutters ? "no-gutters" : null,
    form ? "form-row" : "row"
  )
  // @ts-ignore idk
  return <Tag {...attrs} className={classes} />
}
Row.defaultProps = {
  tag: "div"
}
export default Row
