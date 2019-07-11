import { h } from "preact"
import classNames from "classnames"
import { BREAKPOINTS, BreakPoint } from "../constants"
import { HTMLTag, HTMLProps } from "../html"

const makeColumnClass = (
  isXs: boolean,
  breakpoint: BreakPoint,
  colSize: boolean | "" | "auto" | string
) => {
  if (colSize === true || colSize === "") {
    return isXs ? "col" : `col-${breakpoint}`
  } else if (colSize === "auto") {
    return isXs ? "col-auto" : `col-${breakpoint}-auto`
  }
  return isXs ? `col-${colSize}` : `col-${breakpoint}-${colSize}`
}
interface ColProps extends HTMLProps<"div"> {
  // tslint:disable: no-any
  xs?: any
  sm?: any
  md?: any
  lg?: any
  xl?: any
  // tslint:enable: no-any
  breakpoints?: BreakPoint[]
  tag?: HTMLTag
}
const Col = (props: ColProps) => {
  const { className, breakpoints = [], tag, ...attrs } = props
  const columnClasses = []
  breakpoints.forEach((breakpoint, idx) => {
    const columnProp = props[breakpoint]
    delete attrs[breakpoint]
    if (!columnProp && columnProp !== "") {
      return
    }
    const isXs = idx === 0
    if (typeof columnProp !== "object") {
      const colClass = makeColumnClass(isXs, breakpoint, columnProp)
      columnClasses.push(colClass)
      return
    }
    const colSizeInterfix = isXs ? "-" : `-${breakpoint}-`
    const colClass = makeColumnClass(isXs, breakpoint, columnProp.size)
    columnClasses.push(
      classNames({
        [colClass]: columnProp.size || columnProp.size === "",
        [`order${colSizeInterfix}${columnProp.order}`]:
          columnProp.order || columnProp.order === 0,
        [`offset${colSizeInterfix}${columnProp.offset}`]:
          columnProp.offset || columnProp.offset === 0
      })
    )
  })
  if (!columnClasses.length) {
    columnClasses.push("col")
  }
  const classes = classNames(className, columnClasses)
  // @ts-ignore no idea how to represent this
  return <Tag {...attrs} className={classes} />
}
Col.defaultProps = {
  tag: "div",
  breakpoints: BREAKPOINTS
}
export default Col
