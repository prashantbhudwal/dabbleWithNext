/**
 * This is a playground for an article by Dan Abramov,
 * on writing resilient React components.
 * https://overreacted.io/writing-resilient-components/
 */
import { DoNotStopDataFlowInRendering } from "./data-flow-in-rendering";
import { DoNotStopDataFlowInRenderingWithForm } from "./data-flow-in-rendering-form";

export default function ResilientComponents() {
  return <DoNotStopDataFlowInRenderingWithForm />;
}
