export const reflow = (node: HTMLElement) => {
  // tslint:disable-next-line: no-unused-expression
  void node.offsetHeight
}
export const getNodeHeight = (node: HTMLElement) => {
  return node.scrollHeight
}

export const isBrowser = Boolean(
  typeof window !== "undefined" && window.document
)

export function getDOMElements(target: string) {
  const results = document.querySelectorAll(target)
  if (!results.length) {
    throw new Error(`No DOM elements were found for ${target}.`)
  }
  return results
}
export function getTarget(target: string) {
  const results = getDOMElements(target)
  return results[0]
}
