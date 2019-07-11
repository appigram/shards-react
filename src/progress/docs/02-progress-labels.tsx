import { h } from "preact"
import { Progress } from "../../index"
/**
 * ## Labels
 *
 * You can add labels to your progress bars by providing the value inside of them.
 */
export default function BasicProgress() {
  return <Progress value="20">20</Progress>
}
