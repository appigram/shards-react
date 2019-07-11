import { h, Ref, Component } from "preact"
import ReactDOM from "react-dom"
import * as PopperJS from "popper.js"
import { Popper } from "react-popper"
import classNames from "classnames"
import { getTarget } from "./utils"
import { HTMLTag, HTMLProps } from "./html"

interface PopperManagerProps extends HTMLProps<"div"> {
  target: string
  container: "inline" | string
  open?: boolean
  flip?: boolean
  offset?: string | number
  fallbackPlacement?:
    | "flip"
    | "clockwise"
    | "counterclockwise"
    | PopperJS.Position[]
    | undefined
  placementPrefix?: string
  arrowClassName?: string
  noArrow?: boolean
  tag?: HTMLTag
  modifiers?: object
  boundariesElement?: PopperJS.Boundary
  placement?: PopperJS.Placement
}
interface IPopperRenderer {
  ref: Ref<any>
  style: any
  placement: PopperJS.Placement
  arrowProps: any
}

interface PopperManagerState {
  placement: PopperJS.Placement | null
}
export default class PopperManager extends Component<
  PopperManagerProps,
  PopperManagerState
> {
  // tslint:disable-next-line: prefer-readonly
  private _element: Element | null
  private targetNode?: Element

  constructor(props: PopperManagerProps) {
    super(props)
    this.handlePlacementChange = this.handlePlacementChange.bind(this)
    this.setTargetNode = this.setTargetNode.bind(this)
    this.getReferenceElement = this.getReferenceElement.bind(this)
    this._element = null
    this.state = {
      placement: null
    }
  }

  public static defaultProps = {
    boundariesElement: "scrollParent",
    placement: "auto",
    arrow: true,
    open: false,
    offset: 0,
    fallbackPlacement: "flip",
    flip: true,
    container: "body",
    modifiers: Object.create(null)
  }

  public componentDidUpdate() {
    if (!this._element) return

    const { childNodes } = this._element
    if (childNodes.length) {
      const el = childNodes[0] as HTMLElement
      if (el.focus) el.focus()
    }
  }

  public setTargetNode(node: Element) {
    this.targetNode = node
  }
  public getReferenceElement() {
    return this.targetNode
  }
  public getContainerNode() {
    return getTarget(this.props.container)
  }
  public handlePlacementChange(data: PopperJS.Data) {
    if (this.state.placement !== data.placement) {
      this.setState({ placement: data.placement })
    }
    return data
  }
  public renderChildren() {
    const {
      children,
      open,
      target,
      offset,
      placementPrefix,
      noArrow,
      arrowClassName,
      className,
      container,
      modifiers,
      boundariesElement,
      flip,
      fallbackPlacement,
      tag,
      placement,
      ...attrs
    } = this.props
    const _placement = this.state.placement || placement
    const _className = classNames(
      className,
      placementPrefix ? `${placementPrefix}-${_placement}` : _placement
    )
    const _arrowClassName = classNames("arrow", arrowClassName)
    const _modifiers: PopperJS.Modifiers = {
      offset: {
        offset
      },
      flip: {
        enabled: flip,
        behavior: fallbackPlacement
      },
      preventOverflow: {
        boundariesElement
      },
      update: {
        enabled: true,
        order: 950,
        fn: this.handlePlacementChange
      },
      ...modifiers
    }
    return (
      <Popper
        referenceElement={this.getReferenceElement()}
        modifiers={_modifiers}
        placement={_placement}
        {...attrs}
      >
        {({ ref, style, placement, arrowProps }: IPopperRenderer) => (
          <div
            ref={ref}
            className={_className}
            style={style}
            data-placement={placement}
          >
            {children}
            {!noArrow && (
              <div
                ref={arrowProps.ref}
                style={arrowProps.style}
                className={_arrowClassName}
              />
            )}
          </div>
        )}
      </Popper>
    )
  }
  public render() {
    const { target, open, container } = this.props
    this.setTargetNode(getTarget(target))
    if (!open) {
      return null
    }
    if (container === "inline") {
      return this.renderChildren()
    }
    const containerNode = this.getContainerNode()
    return ReactDOM.createPortal(
      <div>{this.renderChildren()}</div>,
      containerNode
    )
  }
}
