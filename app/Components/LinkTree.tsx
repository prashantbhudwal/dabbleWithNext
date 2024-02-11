import React, { Children, ReactElement, ReactNode, cloneElement } from "react";

interface LinkListProps {
  children: ReactNode[];
}

export default function LinkTree({ children }: LinkListProps) {
  return (
    <ul className="flex w-1/3 flex-col flex-wrap">
      {children.map((child, index) => (
        <li
          key={index}
          className="m-1 inline-flex rounded-full bg-violet-600 px-4 py-3 text-slate-100"
        >
          {child}
        </li>
      ))}
    </ul>
  );
}

interface LinkListProps {
  children: ReactNode[];
  depth?: number;
}

// The LinkTree component now can take any ReactNode, including other LinkTree components.
export function LinkTreeNested({
  children,
  depth = 0,
}: LinkListProps): ReactElement {
  return (
    <ul className={`flex flex-col ${depth > 0 ? "pl-4" : ""} w-full`}>
      {Children.map(children, (child, index) => {
        const isLinkTree =
          React.isValidElement(child) &&
          "children" in (child as ReactElement).props;

        if (isLinkTree) {
          // Increment depth for nested LinkTrees
          const newDepth = depth + 1;
          // Clone the element to inject the depth prop, enabling styling based on nesting level
          const childWithProps = cloneElement(child as ReactElement, {
            depth: newDepth,
          });

          return (
            <li key={index} className="m-1">
              {childWithProps}
            </li>
          );
        }

        // Apply different styles based on depth
        return (
          <li
            key={index}
            className={`m-1 inline-flex rounded-full ${depth === 0 ? "bg-violet-600" : "bg-violet-400"} px-4 py-3 text-slate-100`}
          >
            {child}
          </li>
        );
      })}
    </ul>
  );
}
