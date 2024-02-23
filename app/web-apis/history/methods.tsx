import { Button } from "@/components/ui/button";
import { useSearchParams } from "next/navigation";

export const HistoryAPIMethods = function () {
  const searchParams = useSearchParams();
  console.log(searchParams.toString());

  const history = window.history;
  const goBack = () => history.back();

  const goForward = () => history.forward();

  const goToAGivenPointInHistory = (number: number) => history.go(number);

  const pushState = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("sort", "asc");
    history.pushState(
      null, // state
      "", // title
      `?${params.toString()}` // url
    );
  };

  return (
    <div className="space-y-5 flex flex-col">
      <Button onClick={goBack}>Back using history.back()</Button>
      <Button onClick={goForward}>Forward using history.forward()</Button>
      <Button onClick={() => goToAGivenPointInHistory(-2)}>
        Go back 2 steps using history.go(-2)
      </Button>
      <Button onClick={() => goToAGivenPointInHistory(2)}>
        Go forward 2 steps using history.go(2)
      </Button>
      <Button onClick={pushState}>
        Go to /web-apis using history.pushState()
      </Button>
    </div>
  );
};
