import React, { Component, HTMLAttributes } from "react"
import classNames from "classnames"
interface ProgressProps extends HTMLAttributes<{}> {
  bar?: boolean
  multi?: boolean
  tag?: React.ElementType
  animated?: boolean
  striped?: boolean
  theme?: string
  className?: string
  barClassName?: string
  value?: number | string
  max?: number | string
}
// @ts-ignore
const Progress: React.FunctionComponent<ProgressProps> = props => {
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
    tag: Tag = Component,
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
    return ProgressBar
  }
  return (
    (
      <Tag {...attrs} className={progressClasses}>
        {ProgressBar}
      </Tag>
    ) || Component
  )
}
Progress.defaultProps = {
  tag: "div",
  value: 0,
  max: 100,
  theme: "primary"
}
export default Progress
