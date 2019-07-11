import { h } from "preact"
import classNames from "classnames"
import { HTMLTag, HTMLProps } from "../html"
interface ModalFooterProps extends HTMLProps<"div"> {}
const ModalFooter = (props: ModalFooterProps) => {
  const { className, children, ...attrs } = props
  const classes = classNames("modal-footer", className)
  return (
    <div className={classes} {...attrs}>
      {children}
    </div>
  )
}
export default ModalFooter
