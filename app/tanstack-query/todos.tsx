"use client";
import { useTodos } from "./use-todos";

export const TODOs = () => {
  const { data, error, isLoading } = useTodos();

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 className="font-bold">Todo List</h1>
      <ul className="space-y-2">
        {data?.map((todo) => (
          <li key={todo.id} className="border p-2">
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
};
