import React, { HTMLAttributes } from "react"
import classNames from "classnames"
interface ModalFooterProps extends HTMLAttributes<{}> {
  className?: string
}
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
