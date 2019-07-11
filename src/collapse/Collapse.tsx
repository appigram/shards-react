import { h, Ref, Component } from "preact"
import classNames from "classnames"
import Transition, {
  EnterHandler,
  ExitHandler
} from "react-transition-group/Transition"
import pick from "lodash.pick"
import omit from "lodash.omit"
import { TIMEOUT, TRANSITION_KEYS, TRANSITION_CLASS_MAP } from "../constants"
import { reflow, getNodeHeight } from "../utils"
import { HTMLTag, HTMLProps } from "../html"

interface CollapseProps extends HTMLProps<"div"> {
  open?: boolean
  tag?: HTMLTag
  navbar?: boolean
  innerRef?: Ref<HTMLDivElement>
  onEntering?: EnterHandler
  onEntered?: EnterHandler
  onExit?: ExitHandler
  onExiting?: ExitHandler
  onExited?: ExitHandler
}
interface CollapseState {
  height: number | null
}
/**
 * The `Collapse` component allows you to easily toggle the visibility of your content.
 */
export default class Collapse extends Component<CollapseProps, CollapseState> {
  public static defaultProps = {
    open: false,
    appear: false,
    enter: true,
    exit: true,
    tag: "div",
    timeout: TIMEOUT.COLLAPSE
  }

  constructor(props: CollapseProps) {
    super(props)
    this.state = {
      height: null
    }
  }
  public render() {
    const {
      tag,
      open,
      className,
      navbar,
      children,
      innerRef,
      ...attrs
    } = this.props
    const { height } = this.state
    const transitionProps = pick(attrs, TRANSITION_KEYS)
    const childProps = omit(attrs, TRANSITION_KEYS) as any
    const Tag = tag!
    return (
      <Transition
        {...transitionProps}
        in={open}
        onEntering={this.onEntering.bind(this)}
        onEntered={this.onEntered.bind(this)}
        onExit={this.onExit.bind(this)}
        onExiting={this.onExiting.bind(this)}
        onExited={this.onExited.bind(this)}
        timeout={TIMEOUT.COLLAPSE}
      >
        {status => {
          const style = {
            height: height || null,
            display: status !== "exited" && "block"
          }
          const classes = classNames(
            className,
            TRANSITION_CLASS_MAP[status] || "collapse",
            navbar && "navbar-collapse"
          )
          return (
            <Tag
              {...childProps}
              style={{ ...childProps.style, ...style }}
              className={classes}
              ref={innerRef}
            >
              {children}
            </Tag>
          )
        }}
      </Transition>
    )
  }
  public onEntering(node: HTMLElement, isAppearing: boolean) {
    this.setState({ height: getNodeHeight(node) })
    const { onEntering } = this.props
    if (onEntering) onEntering(node, isAppearing)
  }
  public onEntered(node: HTMLElement, isAppearing: boolean) {
    this.setState({ height: null })
    const { onEntered } = this.props
    if (onEntered) onEntered(node, isAppearing)
  }
  public onExit(node: HTMLElement) {
    this.setState({ height: getNodeHeight(node) })
    const { onExit } = this.props
    if (onExit) onExit(node)
  }
  public onExiting(node: HTMLElement) {
    reflow(node)
    this.setState({ height: 0 })
    const { onExiting } = this.props
    if (onExiting) onExiting(node)
  }
  public onExited(node: HTMLElement) {
    this.setState({ height: null })
    const { onExited } = this.props
    if (onExited) onExited(node)
  }
}
