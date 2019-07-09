import React from "react"

export interface IDropDownContext {
  toggle(e: Event): void
  open: boolean
  direction: "up" | "down" | "left" | "right"
  nav: boolean
}

const context: IDropDownContext = {
  toggle: () => {},
  open: false,
  direction: "down",
  nav: false
}

export const DropdownContext = React.createContext(context)
