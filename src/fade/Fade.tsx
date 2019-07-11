import { h, Ref } from "preact"
import classNames from "classnames"
import Transition, { TransitionProps } from "react-transition-group/Transition"
import omit from "lodash.omit"
import pick from "lodash.pick"
import { TIMEOUT, TRANSITION_KEYS } from "../constants"
import { HTMLTag, HTMLProps } from "../html"

interface FadeProps
  extends HTMLProps<"div">,
    Partial<Omit<TransitionProps, "children">> {
  tag?: HTMLTag
  baseClass?: string
  baseClassActive?: string
  innerRef?: Ref<Transition>
}
const Fade = (props: FadeProps) => {
  const {
    tag,
    baseClass,
    baseClassActive,
    className,
    children,
    innerRef,
    ...attrs
  } = props
  const transitionProps = pick(attrs, TRANSITION_KEYS) as TransitionProps
  const childProps = omit(attrs, TRANSITION_KEYS)
  const Tag = tag!
  return (
    <Transition {...transitionProps}>
      {status => {
        const isActive = status === "entered"
        const classes = classNames(
          className,
          baseClass,
          isActive && baseClassActive
        )
        return (
          <Tag className={classes} {...childProps} ref={innerRef}>
            {children}
          </Tag>
        )
      }}
    </Transition>
  )
}
Fade.defaultProps = {
  // ...Transition.defaultProps,
  tag: "div",
  baseClass: "fade",
  baseClassActive: "show",
  timeout: TIMEOUT.FADE,
  appear: true,
  enter: true,
  exit: true,
  in: true
}
export default Fade
