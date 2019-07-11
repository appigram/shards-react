import { h } from "preact"
import classNames from "classnames"
import { HTMLTag, HTMLProps } from "../html"

interface ContainerProps extends HTMLProps<"div"> {
  fluid?: boolean
  tag?: HTMLTag
}
const Container = (props: ContainerProps) => {
  const { className, fluid, tag, ...attrs } = props
  const classes = classNames(className, fluid ? "container-fluid" : "container")
  const Tag = tag!

  return <Tag {...attrs} className={classes} />
}
Container.defaultProps = {
  tag: "div"
}
export default Container
