import { h } from "preact"
import { Nav, NavItem, NavLink } from "../../index"
/**
 * ## Fill Style
 *
 * Using the `fill` prop, you can force the nav content to extend the full available width.
 */
export default function NavPillsExample() {
  return (
    <Nav fill>
      <NavItem>
        <NavLink href="#">Active</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">Link</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">Another Link</NavLink>
      </NavItem>
      <NavItem>
        <NavLink disabled href="#">
          Disabled Link
        </NavLink>
      </NavItem>
    </Nav>
  )
}
