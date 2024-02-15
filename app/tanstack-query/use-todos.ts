import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type TODO = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export const useTodos = () => {
  const fetchTodos = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
    return res.data;
  };

  return useQuery<TODO[], Error>({
    queryKey: ["todos"],
    queryFn: () => fetchTodos(),
  });
};
