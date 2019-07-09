import React from "react"
import classNames from "classnames"
import PopperManager from "../PopperManager"
import { getTarget } from "../utils"
import { EVENTS, TIMEOUT } from "../constants"
import Popper from "popper.js"

interface PopoverProps {
  className?: string
  target: string
  container?: "inline" | string
  modifiers?: object
  open?: boolean
  innerClassName?: string
  disabled?: boolean
  noArrow?: boolean
  arrowClassName?: string
  boundariesElement?: Popper.Boundary
  placement?: Popper.Placement
  placementPrefix?: string
  offset?: string | number
  toggle(...args: any[]): any
  delay?:
    | number
    | {
        show?: number
        hide?: number
      }
}
/**
 * Popovers are powerful elements similar to tooltips and powered by Popper.js that can be applies to any interactive element.
 */
export default class Popover extends React.Component<PopoverProps, {}> {
  private _target?: Element
  private readonly _popover?: Element
  private _hideTimeout?: number
  private _showTimeout?: number

  constructor(props: PopoverProps) {
    super(props)
    this.show = this.show.bind(this)
    this.hide = this.hide.bind(this)
    this.maybeShow = this.maybeShow.bind(this)
    this.toggle = this.toggle.bind(this)
    this.addListeners = this.addListeners.bind(this)
    this.removeListeners = this.removeListeners.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.getDelay = this.getDelay.bind(this)
    this._target = undefined
    this._hideTimeout = undefined
    this._showTimeout = undefined
  }

  public static defaultProps = {
    open: false,
    noArrow: false,
    placement: "top",
    placementPrefix: "bs-popover",
    delay: {
      show: 0,
      hide: 0
    },
    toggle: () => {}
  }
  public componentDidMount() {
    this._target = getTarget(this.props.target)
    this.maybeShow()
  }
  public componentDidUpdate() {
    this.maybeShow()
  }
  public componentWillUnmount() {
    clearTimeout(this._showTimeout)
    clearTimeout(this._hideTimeout)
    this.removeListeners()
  }
  public show() {
    clearTimeout(this._hideTimeout)
    this.addListeners()
    if (!this.props.open) {
      clearTimeout(this._showTimeout)
      this._showTimeout = window.setTimeout(this.toggle, this.getDelay("show"))
    }
  }
  public hide() {
    clearTimeout(this._showTimeout)
    this.removeListeners()
    if (this.props.open) {
      clearTimeout(this._hideTimeout)
      this._hideTimeout = window.setTimeout(this.toggle, this.getDelay("hide"))
    }
  }
  public maybeShow() {
    if (this.props.open) {
      this.show()
      return
    }
    this.hide()
  }
  public toggle(event: Event) {
    if (this.props.disabled) {
      event.preventDefault()
      return
    }
    return this.props.toggle(event)
  }
  public addListeners() {
    EVENTS.CLICK.forEach(event =>
      document.addEventListener(event, this.handleClick, true)
    )
  }
  public removeListeners() {
    EVENTS.CLICK.forEach(event => {
      document.removeEventListener(event, this.handleClick, true)
    })
  }
  public handleClick(e: Event) {
    const { _target } = this
    if (!_target) return

    const eventTarget = e.target as HTMLElement
    if (
      eventTarget !== _target &&
      !_target.contains(eventTarget) &&
      eventTarget !== this._popover &&
      !(this._popover && this._popover.contains(eventTarget))
    ) {
      if (this._hideTimeout) {
        clearTimeout(this._hideTimeout)
      }
      if (this.props.open) {
        this.toggle(e)
      }
    }
  }
  public getDelay(key: "show" | "hide") {
    if (typeof this.props.delay === "object") {
      const val = this.props.delay[key]
      if (val && !isNaN(val)) return val

      return TIMEOUT[key.toUpperCase() as "SHOW" | "HIDE"]
    }
    return this.props.delay
  }
  public render() {
    const {
      className,
      target,
      container,
      modifiers,
      open,
      innerClassName,
      noArrow,
      arrowClassName,
      placement,
      placementPrefix,
      boundariesElement,
      offset,
      ...attrs
    } = this.props // disabled, toggle, delay
    if (!open) {
      return null
    }
    const classes = classNames("popover-inner", innerClassName)
    const popperClasses = classNames("popover", "show", className)
    return (
      <PopperManager
        className={popperClasses}
        target={target}
        container={container}
        modifiers={modifiers}
        offset={offset}
        open={open}
        noArrow={noArrow}
        arrowClassName={arrowClassName}
        placement={placement}
        placementPrefix={placementPrefix}
        boundariesElement={boundariesElement}
      >
        <div {...attrs} className={classes} />
      </PopperManager>
    )
  }
}
