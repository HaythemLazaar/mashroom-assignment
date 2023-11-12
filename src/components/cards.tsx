import { Comment } from "./comments";

export default function Cards({ data }: { data: Comment[] }) {
  return (
    <div className="w-full flex flex-wrap py-2 pl-2 pr-1 gap-10 max-h-[65vh] overflow-y-scroll mt-6 border-2 border-border rounded-lg border-dashed">
      {data.map((comment: Comment) => {
        return (
          <div
            className="bg-surfacegray rounded-md border border-border p-4 flex flex-col gap-1 relative w-full"
            key={comment.id}
          >
            <h3>
              Name: <span className="font-[600]">{comment.name}</span>
            </h3>
            <h3 className="pb-2">
              Email: <span className="font-[600]">{comment.email}</span>
            </h3>
            <h3 className="p-2 bg-white border border-border rounded-md">
              {comment.body}
            </h3>
            <div className="absolute right-0 top-0 mr-[10px] mt-[10px] w-10 h-10 rounded-full flex justify-center items-center bg-surfaceTeal">
              {comment.id}
            </div>
          </div>
        );
      })}
    </div>
  );
}
