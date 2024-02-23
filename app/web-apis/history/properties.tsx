import { TestingCanvas } from "@/components/testing-canvas";

const howScrollRestorationWorks = function () {
  // The scrollRestoration property of the History interface allows web applications to explicitly set default scroll restoration behavior on history navigation.
  // In NextJs: The default behavior of the Next.js App Router is to scroll to the top of a new route or to maintain the scroll position for backwards and forwards navigation. If you'd like to disable this behavior, you can pass scroll={false} to the <Link> component, or scroll: false to router.push() or router.replace().
  const history = window.history;
  console.log(history.scrollRestoration);
  history.scrollRestoration = "manual";
  console.log(history.scrollRestoration);
};

const historyAPIProperties = function () {
  // The history object represents the user's navigation history for the current session.

  const history = window.history;

  // The state object is a JavaScript object which can contain data about the state of the page when it was last navigated to.
  const state = history.state;
  console.log(state);

  // The length property returns the number of elements in the history list.
  const historyLength = history.length;
  console.log(historyLength);

  howScrollRestorationWorks();

  console.log(history);
};

export const HistoryAPIProperties = function () {
  historyAPIProperties();

  return <>{"See code and console"}</>;
};
