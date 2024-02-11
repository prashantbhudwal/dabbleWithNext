"use client";
import { Button } from "@/components/ui/button";

const initialValues = { id: "1", name: "Alice" };

function minimumLength<Type extends { length: number }>(
  obj: Type,
  minimum: number
): Type {
  if (obj.length >= minimum) {
    return obj;
  } else {
    return { ...obj, length: minimum };
  }
}

export default function Constraints() {
  return (
    <div>
      <h1>Welcome to Next.js!</h1>
      <p>This is a basic Next.js page.</p>
      <Form
        initialValues={initialValues}
        onSubmit={(values) => console.log(values)}
      />
    </div>
  );
}

interface Identifiable {
  id: string;
}

function Form<T extends Identifiable>({
  initialValues,
  onSubmit,
  ...props
}: {
  initialValues: T;
  onSubmit: (values: T) => void;
}) {
  return <Button onClick={() => onSubmit(initialValues)}>LogValues</Button>;
}
