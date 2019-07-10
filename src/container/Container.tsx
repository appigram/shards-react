import React, { HTMLAttributes } from "react"
import classNames from "classnames"
interface ContainerProps extends HTMLAttributes<{}> {
  className?: string
  fluid?: boolean
  tag?: ((...args: any[]) => any) | string
}
const Container = (props: ContainerProps) => {
  const { className, fluid, tag: Tag, ...attrs } = props
  const classes = classNames(className, fluid ? "container-fluid" : "container")
  // @ts-ignore idk
  return <Tag {...attrs} className={classes} />
}
Container.defaultProps = {
  tag: "div"
}
export default Container
