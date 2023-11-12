"use client";
import { Personalcard, MessageText, Send } from "iconsax-react";
import { Comment } from "./comments";

export default function Table({ data }: { data: Comment[] }) {
  return (
    <div className="w-full pt-6">
      <table className="border-y border-border w-full">
        <thead className="border-b border-border text-left p-0 text-sm text-gray-700">
          <th className="border-r border-border p-2">
            <div className="flex items-center gap-2">
              <Personalcard />
              Name
            </div>
          </th>
          <th className="border-r border-border p-2">
            <div className="flex items-center gap-2">
              <Send />
              Email
            </div>
          </th>
          <th className="p-2 ">
            <div className="flex items-center gap-2">
              <MessageText />
              Body
            </div>
          </th>
        </thead>
        <tbody>
          {data.map((comment: Comment) => {
            return (
              <tr key={comment.id} className="border-b border-border">
                <td className="font-[600] border-r border-border p-2 ">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-surfaceTeal flex items-center justify-center rounded-full font-[900] text-sm text-primary">
                      {comment.name.slice(0, 1).toUpperCase()}
                    </div>
                    {comment.name.slice(0, 30)}
                  </div>
                </td>
                <td className="font-[600] border-r border-border p-2">
                  <div className="bg-surfacegray p-1 rounded-lg flex items-center w-fit text-sm">
                    {comment.email}
                  </div>
                </td>
                <td className="text-sm p-2">{comment.body.slice(0, 120)}...</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
