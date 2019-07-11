import { h } from "preact"
import classNames from "classnames"
import { HTMLProps } from "../html"

interface ButtonGroupProps extends Omit<HTMLProps<"div">, "size"> {
  vertical?: boolean
  size?: string
}
const ButtonGroup = (props: ButtonGroupProps) => {
  const { className, vertical, size, ...attrs } = props
  const classes = classNames(
    className,
    size && `btn-group-${size}`,
    vertical ? "btn-group-vertical" : "btn-group"
  )
  return <div className={classes} {...attrs} />
}
export default ButtonGroup
