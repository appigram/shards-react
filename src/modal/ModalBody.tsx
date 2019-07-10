import React, { HTMLAttributes } from "react"
import classNames from "classnames"
interface ModalBodyProps extends HTMLAttributes<{}> {
  className?: string
}
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
