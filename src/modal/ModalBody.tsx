import { h } from "preact"
import classNames from "classnames"
import { HTMLTag, HTMLProps } from "../html"
interface ModalBodyProps extends HTMLProps<"div"> {}
const ModalBody = (props: ModalBodyProps) => {
  const { className, children, ...attrs } = props
  const classes = classNames("modal-body", className)
  return (
    <div className={classes} {...attrs}>
      {children}
    </div>
  )
}
export default ModalBody
