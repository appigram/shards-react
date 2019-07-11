import { h } from "preact"
import classNames from "classnames"
import { HTMLTag, HTMLProps } from "../html"
interface ModalHeaderProps extends HTMLProps<"div"> {
  toggle?(...args: any[]): any
  tag?: HTMLTag
  closeAriaLabel?: string
  titleClass?: string
}
const ModalHeader = (props: ModalHeaderProps) => {
  const {
    className,
    children,
    toggle,
    tag,
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
  const Tag = tag!
  return (
    <div className={classes} {...attrs}>
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
