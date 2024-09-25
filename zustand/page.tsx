"use client";

import { item } from "@/app/lib/store";

export default function products() {
  const { items, increase, decrease }: any = item();
  return (
    <div className="w-full items-center text-center flex flex-col ">
      <h1 className="mx-auto text-3xl font-medium">Items:{items}</h1>
      <div className="flex space-x-4 m-4">
        <div>
          <button
            className="px-4 py-3 bg-purple-500 rounded-xl"
            onClick={increase}
          >
            Increase
          </button>
        </div>
        <div>
          <button
            className="px-4 py-3 bg-purple-500 rounded-xl"
            onClick={decrease}
          >
            Increase
          </button>
        </div>
      </div>
    </div>
  );
}
