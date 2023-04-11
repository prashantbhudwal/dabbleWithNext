import { useAtom } from "jotai";
import Button from "../Components/Button";
import { testAtom } from "../state/app-state";

export default function Page() {
  const [testValue, setTestValue] = useAtom(testAtom);
  return (
    <div>
      <h1>{testValue}</h1>
      <Button>Page</Button>
    </div>
  );
}
