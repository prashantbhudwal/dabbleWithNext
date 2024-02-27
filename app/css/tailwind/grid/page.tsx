import { TestingCanvas } from "@/components/testing-canvas";
import { TestOverflow } from "@/components/test-overflow";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { longText } from "@/app/constants";

export default function Grid() {
  return <GridAutoFlow />;
}

const GridTemplateColumns = function () {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="bg-gray-300 max-w-40">{longText.fortyWords}</div>
      <div className="bg-gray-300">2</div>
      <div className="bg-gray-300">3</div>
      <div className="bg-gray-300">4</div>
      <div className="bg-gray-300">{longText.sixtyWords}</div>
      <div className="bg-gray-300 max-h-56 overflow-y-auto">
        {longText.hundredWords}
      </div>
    </div>
  );
};

const GridAutoFlow = function () {
  return (
    <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-3">
      <div className="col-span-2 bg-fuchsia-100">01</div>
      <div className="col-span-2 bg-fuchsia-200">02</div>
      <div className="bg-fuchsia-300">03</div>
      <div className="bg-fuchsia-400">04</div>
      <div className="bg-fuchsia-500">05</div>
    </div>
  );
};

const FinderLayoutWithSearch = function () {
  // Current problem: Centering the search area easily. It is easier with flex
  return (
    <div className="h-screen">
      <div className="grid grid-cols-8 gap-2 h-4/6 grid-rows-12">
        <div className="bg-emerald-600 col-span-8 row-span-2 grid grid-cols-8 grid-rows-4 px-2">
          <div className="col-span-5 bg-green-200 row-start-2 row-span-2">
            <Input className="" placeholder="Search Text" />
          </div>
          <div className=" bg-purple-300 row-start-2 row-span-2 pl-6 col-span-2">
            <Button className="w-full">Search</Button>
          </div>
        </div>
        <div className="bg-emerald-700 col-span-2 row-span-10 overflow-y-auto">
          LeftPanel: Selecting something here will appear on the right.
          <TestOverflow />
        </div>
        <div className="bg-emerald-800 col-span-6 row-span-10 overflow-y-auto">
          Main Content Display
          <TestOverflow />
        </div>
      </div>
    </div>
  );
};
