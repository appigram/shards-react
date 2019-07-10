import React, { HTMLAttributes } from "react"
import classNames from "classnames"
interface ModalHeaderProps extends HTMLAttributes<{}> {
  className?: string
  toggle?(...args: any[]): any
  tag?: string
  closeAriaLabel?: string
  titleClass?: string
}
const ModalHeader = (props: ModalHeaderProps) => {
  const {
    className,
    children,
    toggle,
    tag: Tag,
    closeAriaLabel,
    titleClass,
    ...attrs
  } = props
  const classes = classNames("modal-header", className)
  const titleClasses = classNames("modal-title", titleClass)
  let closeButton = null
  if (toggle) {
    closeButton = (
      <button
        type="button"
        onClick={toggle}
        className="close"
        aria-label={closeAriaLabel}
      >
        <span aria-hidden="true">{String.fromCharCode(215)}</span>
      </button>
    )
  }
  return (
    <div className={classes} {...attrs}>
      // @ts-ignore idk
      <Tag className={titleClasses}>{children}</Tag>
      {closeButton}
    </div>
  )
}
ModalHeader.defaultProps = {
  tag: "h5",
  closeAriaLabel: "Close"
}
export default ModalHeader
