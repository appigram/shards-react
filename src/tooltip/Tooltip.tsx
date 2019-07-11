import { h, Component } from "preact"
import classNames from "classnames"
import omit from "lodash.omit"
import { getTarget } from "../utils"
import { TIMEOUT, EVENTS } from "../constants"
import PopperManager from "../PopperManager"
import Popper from "popper.js"
import { HTMLProps } from "../html"

interface TooltipProps extends HTMLProps<"div"> {
  target: string
  container?: "inline" | string
  trigger?: string
  open?: boolean
  disabled?: boolean
  arrowClassName?: string
  innerClassName?: string
  offset?: string | number
  delay?:
    | number
    | {
        show?: number
        hide?: number
      }
  boundariesElement?: Popper.Boundary
  placement?: Popper.Placement
  placementPrefix?: string
  noArrow?: boolean
  toggle(e: MouseEvent): void
  modifiers?: object
  autohide?: boolean
}
/**
 * Tooltips are powerful components powered behind the scenes by Popper.js that can be attached to any element.
 */
export default class Tooltip extends Component<TooltipProps, {}> {
  private _target?: Element
  private _hideTimeout?: number
  private _showTimeout?: number

  constructor(props: TooltipProps) {
    super(props)
    this.addListeners = this.addListeners.bind(this)
    this.removeListeners = this.removeListeners.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleMouseEnter = this.handleMouseEnter.bind(this)
    this.handleMouseLeave = this.handleMouseLeave.bind(this)
    this.handleMouseOverContent = this.handleMouseOverContent.bind(this)
    this.handleMouseLeaveContent = this.handleMouseLeaveContent.bind(this)
    this.show = this.show.bind(this)
    this.hide = this.hide.bind(this)
    this.toggle = this.toggle.bind(this)
    this._target = undefined
    this._hideTimeout = undefined
    this._showTimeout = undefined
  }

  public static defaultProps = {
    trigger: "hover",
    open: false,
    disabled: false,
    noArrow: false,
    placement: "top",
    placementPrefix: "bs-tooltip",
    autohide: true,
    delay: {
      show: 0,
      hide: 0
    },
    toggle: () => {}
  }

  public componentDidMount() {
    this._target = getTarget(this.props.target)
    this.addListeners()
  }
  public componentWillUnmount() {
    clearTimeout(this._hideTimeout)
    clearTimeout(this._showTimeout)
    this.removeListeners()
  }
  public addListeners() {
    const { trigger } = this.props
    if (!trigger) return
    const triggers = trigger.trim().split(/\s+/)
    triggers.forEach(trigger => {
      switch (trigger) {
        case "click":
          EVENTS.CLICK.forEach(e => document.addEventListener(e, this))
          break
        case "hover":
          EVENTS.MOUSE.forEach(
            e => this._target && this._target.addEventListener(e, this)
          )
          break
        case "focus":
          EVENTS.FOCUS.forEach(
            e => this._target && this._target.addEventListener(e, this)
          )
          break
        default:
          break
      }
    }, this)
  }
  public removeListeners() {
    EVENTS.CLICK.forEach(e => document.removeEventListener(e, this), this)
    EVENTS.MOUSE.concat(EVENTS.FOCUS).forEach(
      e => this._target && this._target.removeEventListener(e, this),
      this
    )
  }
  public handleEvent(e: MouseEvent) {
    if (this.props.disabled || this._target === null) {
      return
    }
    switch (e.type) {
      case "click":
      case "touchstart":
        this.handleClick(e)
        break
      case "mouseenter":
        this.handleMouseEnter(e)
        break
      case "mouseleave":
        this.handleMouseLeave(e)
        break
      case "focusin":
        this.show(e)
        break
      case "focusout":
        this.hide(e)
        break
      default:
        break
    }
  }
  public handleClick(e: MouseEvent) {
    const { _target } = this
    const eventTarget = e.target as HTMLElement
    if (_target && (e.target === _target || _target.contains(eventTarget))) {
      if (this._hideTimeout) {
        clearTimeout(this._hideTimeout)
      }
      if (!this.props.open) {
        this.toggle(e)
      }
      return
    }
    if (this.props.open && eventTarget.getAttribute("role") !== "tooltip") {
      if (this._showTimeout) {
        clearTimeout(this._showTimeout)
      }
      this._hideTimeout = window.setTimeout(
        this.hide.bind(this, e),
        this.getDelay("hide")
      )
    }
  }
  public handleMouseEnter(e: MouseEvent) {
    if (this._hideTimeout) {
      clearTimeout(this._hideTimeout)
    }
    this._showTimeout = window.setTimeout(
      this.show.bind(this, e),
      this.getDelay("show")
    )
  }
  public handleMouseLeave(e: MouseEvent) {
    if (this._showTimeout) {
      clearTimeout(this._showTimeout)
    }
    this._hideTimeout = window.setTimeout(
      this.hide.bind(this, e),
      this.getDelay("hide")
    )
  }
  public handleMouseOverContent() {
    if (this.props.autohide) {
      return
    }
    if (this._hideTimeout) {
      clearTimeout(this._hideTimeout)
    }
  }
  public handleMouseLeaveContent(e: MouseEvent) {
    if (this.props.autohide) {
      return
    }
    if (this._showTimeout) {
      clearTimeout(this._showTimeout)
    }

    const reactEvent = e as any
    if (reactEvent.persist) reactEvent.persist()

    this._hideTimeout = window.setTimeout(
      this.hide.bind(this, reactEvent.nativeEvent || e),
      this.getDelay("hide")
    )
  }
  public getDelay(key: "show" | "hide") {
    if (typeof this.props.delay === "object") {
      const val = this.props.delay[key]
      if (val && !isNaN(val)) return val

      return TIMEOUT[key.toUpperCase() as "SHOW" | "HIDE"]
    }
    return this.props.delay
  }
  public show(e: MouseEvent) {
    if (!this.props.open) {
      clearTimeout(this._showTimeout)
      this.toggle(e)
    }
  }
  public hide(e: MouseEvent) {
    if (this.props.open) {
      clearTimeout(this._hideTimeout)
      this.toggle(e)
    }
  }
  public toggle(e: MouseEvent) {
    if (this.props.disabled) {
      return e && e.preventDefault()
    }
    return this.props.toggle(e)
  }
  public render() {
    const _props = omit(this.props, [
      "trigger",
      "disabled",
      "delay",
      "toggle",
      "autohide"
    ])
    const {
      target,
      container,
      open,
      className,
      arrowClassName,
      innerClassName,
      boundariesElement,
      placement,
      placementPrefix,
      modifiers,
      offset,
      noArrow,
      ...attrs
    } = _props
    if (!open) {
      return null
    }
    const classes = classNames("tooltip-inner", innerClassName)
    const popperClasses = classNames("tooltip", "show", className)
    return (
      <PopperManager
        container={container}
        className={popperClasses}
        arrowClassName={arrowClassName}
        target={target}
        open={open}
        noArrow={noArrow}
        boundariesElement={boundariesElement}
        placement={placement}
        placementPrefix={placementPrefix}
        modifiers={modifiers}
        offset={offset}
      >
        <div
          {...attrs}
          className={classes}
          role="tooltip"
          aria-hidden={open}
          onMouseOver={this.handleMouseOverContent}
          onMouseLeave={this.handleMouseLeaveContent}
        />
      </PopperManager>
    )
  }
}
