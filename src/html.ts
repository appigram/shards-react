import { JSXInternal } from "preact/src/jsx"

export type HTMLTag = keyof JSXInternal.IntrinsicElements
export type HTMLProps<
  Tag extends HTMLTag
> = JSXInternal.IntrinsicElements[Tag] &
  Pick<JSXInternal.HTMLAttributes, "className">
