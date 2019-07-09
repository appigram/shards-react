import React, { Fragment } from "react"
import classNames from "classnames"
import { Transition } from "react-transition-group"
import { TIMEOUT } from "../constants"
interface ModalProps {
  id?: string
  className?: string
  open?: boolean
  fade?: boolean
  backdrop?: boolean
  // tslint:disable:no-any
  showModal?(...args: any[]): any
  hideModal?(...args: any[]): any
  hiddenModal?(...args: any[]): any
  toggle?(...args: any[]): any
  // tslint:enable:no-any
  centered?: boolean
  backdropClassName?: string
  modalClassName?: string
  animation?: boolean
  position?: string
  size?: string
  tabIndex?: number
  modalContentClassName?: string
  role?: string
}
interface ModalState {
  open?: boolean
}
/**
 * Creating flexible modal dialogs can be achieved using the `Modal` component. They feature a series of helpful subcomponents, sizes and various other options that you can use to customize the display and behavior of your modals.
 */
export default class Modal extends React.Component<ModalProps, ModalState> {
  private modalContent: HTMLDivElement | null

  constructor(props: ModalProps) {
    super(props)
    this.state = {
      open: this.props.open || false
    }
    this.handleOnEntered = this.handleOnEntered.bind(this)
    this.handleOnExit = this.handleOnExit.bind(this)
    this.handleOnExited = this.handleOnExited.bind(this)
    this.handleBackdropClick = this.handleBackdropClick.bind(this)
    this.modalContent = null
  }
  public static defaultProps = {
    open: false,
    fade: true,
    backdrop: true,
    role: "dialog"
  }
  public componentDidUpdate(prevProps: ModalProps, prevState: ModalState) {
    if (prevState.open !== this.props.open) {
      this.setState({ open: this.props.open })
    }
  }
  public handleOnEntered(type: "backdrop" | "modal", node: HTMLElement) {
    const { fade, showModal } = this.props
    if (type === "backdrop" && fade === false) {
      return
    }
    node.classList.add("show")
    if (type === "modal") {
      if (showModal) showModal()
    }
  }
  public handleOnExit(type: "backdrop" | "modal", node: HTMLElement) {
    const { fade, hideModal } = this.props
    if (type === "backdrop" && fade === false) {
      return
    }
    node.classList.remove("show")
    if (type === "modal") {
      if (hideModal) hideModal()
    }
  }
  public handleOnExited() {
    const { hiddenModal } = this.props
    if (hiddenModal) hiddenModal()
  }
  public handleBackdropClick(e: Event) {
    const { modalContent } = this
    if (modalContent && !modalContent.contains(e.target as HTMLElement)) {
      const { toggle } = this.props
      if (toggle) toggle()
    }
  }
  public render() {
    if (!this.state.open) {
      return null
    }
    const {
      id,
      backdrop,
      fade,
      tabIndex,
      backdropClassName,
      modalClassName,
      animation,
      modalContentClassName,
      position,
      role,
      size,
      children,
      centered,
      className
    } = this.props // open, showModal, hideModal, hiddenModal, toggle
    const backdropClasses = classNames(
      "modal-backdrop",
      fade ? "fade" : "show",
      backdropClassName
    )
    const modalClasses = classNames(
      "modal",
      fade && "fade",
      modalClassName,
      fade &&
        (animation || (position && position.split("-").slice(-1)[0]) || "top")
    )
    const modalAttrs = {
      "aria-hidden": true,
      id: id || undefined,
      tabIndex,
      role,
      style: {
        display: "block"
      }
    }
    const modalDialogClasses = classNames(
      "modal-dialog",
      className,
      size && `modal-${size}`,
      centered && "modal-dialog-centered",
      position && `modal-${position}`
    )
    const contentClasses = classNames("modal-content", modalContentClassName)
    return (
      <Fragment>
        {backdrop && (
          <Transition
            timeout={fade ? TIMEOUT.FADE : 0}
            in={this.state.open}
            appear={this.state.open}
            mountOnEnter
            unmountOnExit
            onEntered={node => this.handleOnEntered("backdrop", node)}
            onExit={node => this.handleOnExit("backdrop", node)}
            onExited={this.handleOnExited}
          >
            <div className={backdropClasses} />
          </Transition>
        )}
        <Transition
          timeout={fade ? TIMEOUT.FADE : 0}
          in={this.state.open}
          appear={this.state.open}
          mountOnEnter
          unmountOnExit
          onClick={this.handleBackdropClick}
          onEntered={node => this.handleOnEntered("modal", node)}
          onExit={node => this.handleOnExit("modal", node)}
        >
          <div className={modalClasses} {...modalAttrs}>
            <div className={modalDialogClasses} role="document">
              <div
                ref={el => (this.modalContent = el)}
                className={contentClasses}
              >
                {children}
              </div>
            </div>
          </div>
        </Transition>
      </Fragment>
    )
  }
}
