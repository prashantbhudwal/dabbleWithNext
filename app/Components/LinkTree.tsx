import { ReactNode } from "react";

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
