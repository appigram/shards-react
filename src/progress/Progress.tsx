import { h, Component } from "preact"
import classNames from "classnames"
import { HTMLTag, HTMLProps } from "../html"
import { JSXInternal } from "preact/src/jsx"

interface ProgressProps extends HTMLProps<"div"> {
  bar?: boolean
  multi?: boolean
  tag?: HTMLTag
  animated?: boolean
  striped?: boolean
  theme?: string
  barClassName?: string
  value?: number | string
  max?: number | string
}
const Progress = (props: ProgressProps) => {
  const {
    children,
    className,
    barClassName,
    value,
    max,
    animated,
    striped,
    theme,
    bar,
    multi,
    tag,
    ...attrs
  } = props
  const parsedValue = Number(value) || 0
  const parsedMax = Number(max) || 1
  const percent = (parsedValue / parsedMax) * 100
  const progressClasses = classNames(className, "progress")
  const progressBarClasses = classNames(
    "progress-bar",
    bar ? className || barClassName : barClassName,
    animated && "progress-bar-animated",
    theme && `bg-${theme}`,
    (striped || animated) && "progress-bar-striped"
  )
  const ProgressBar = multi ? (
    children
  ) : (
    <div
      className={progressBarClasses}
      style={{ width: `${percent}%` }}
      role="progressbar"
      aria-valuenow={parsedValue}
      aria-valuemin={0}
      aria-valuemax={parsedMax}
    >
      {children}
    </div>
  )
  if (bar) {
    return ProgressBar as JSXInternal.Element
  }
  const Tag = tag!
  return (
    <Tag {...attrs} className={progressClasses}>
      {ProgressBar}
    </Tag>
  )
}
Progress.defaultProps = {
  tag: "div",
  value: 0,
  max: 100,
  theme: "primary"
}
export default Progress
