"use client";
import { useState } from "react";

export default function Accordion() {
  const [isActive, SetIsActive] = useState({
    panelOne: false,
    panelTwo: false,
  });

  const handleClick = function (panel: string) {
    if (panel === "panelOne") {
      SetIsActive({ panelOne: true, panelTwo: false });
    } else {
      SetIsActive({ panelOne: false, panelTwo: true });
    }
  };

  return (
    <>
      <h2>About, Lorem</h2>
      <Panel
        title="Introduction"
        isActive={isActive.panelOne}
        clickHandler={() => handleClick("panelOne")}
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet rem
        repellendus odio qui, impedit magnam illo architecto aliquid iusto
        ducimus esse. Eos consectetur praesentium quisquam dignissimos aliquam,
        quaerat illum vero!
      </Panel>
      <Panel
        title="History"
        isActive={isActive.panelTwo}
        clickHandler={() => handleClick("panelTwo")}
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet rem
        repellendus odio qui, impedit magnam illo architecto aliquid iusto
        ducimus esse. Eos consectetur praesentium quisquam dignissimos aliquam,
        quaerat illum vero!
      </Panel>
    </>
  );
}

function Panel({
  title,
  children,
  isActive,
  clickHandler,
}: {
  title: string;
  children: React.ReactNode;
  isActive: boolean;
  clickHandler: () => void;
}) {
  return (
    <section className="border p-4">
      <h3>{title}</h3>
      {isActive ? (
        <p>{children}</p>
      ) : (
        <button onClick={clickHandler} className="underline">
          Show
        </button>
      )}
    </section>
  );
}
