"use client";
import { useState } from "react";
import { Grid1, RowVertical } from "iconsax-react";
import Cards from "./cards";
import Table from "./table";

export default function CommentsLayout({ data }: { data: Comment[] }) {
  const [view, setView] = useState("cards");
  return (
    <div className="w-full ">
      <div className="flex items-end justify-between">
        <h1 className="text-3xl font-black">Comments</h1>
        <div className="flex items-center gap-2 p-1 rounded-md bg-surfacegray">
          <div
            className={`cursor-pointer rounded-sm p-2 flex justify-center items-center ${
              view === "cards" ? "bg-white" : "bg-surfacegray hover:opacity-80"
            }`}
            onClick={() => setView("cards")}
          >
            <RowVertical />
          </div>
          <div
            className={`cursor-pointer rounded-sm p-2 flex justify-center items-center ${
              view === "table" ? "bg-white" : "bg-surfacegray hover:opacity-80"
            }`}
            onClick={() => setView("table")}
          >
            <Grid1 />
          </div>
        </div>
      </div>
      {view === "cards" ? <Cards data={data} /> : <Table data={data} />}
    </div>
  );
}

export interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}
