import React, { HTMLAttributes } from "react"
import classNames from "classnames"
interface CardBodyProps extends HTMLAttributes<{}> {
  className?: string
  tag?: ((...args: any[]) => any) | string
}
const CardBody: React.FunctionComponent<CardBodyProps> = props => {
  const { className, tag: Tag, children, ...attrs } = props
  const classes = classNames(className, "card-body")
  return (
    // @ts-ignore idk
    <Tag {...attrs} className={classes}>
      {children}
    </Tag>
  )
}
CardBody.defaultProps = {
  tag: "div"
}
export default CardBody
