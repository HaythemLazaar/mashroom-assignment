import getComments from "@/server/comments";

export default async function Comments() {
  const data: {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
  }[] = await getComments();
  console.log(data);
  return (
    <>
      <h1 className="text-5xl font-black py-6 self-start">Comments:</h1>
      <div className="w-full flex flex-wrap py-10  gap-10">
        {data.map((comment) => {
          return (
            <div
              className="bg-surfacegray rounded-md border border-border p-4 flex flex-col gap-1 w-full relative max-w-[700px]"
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
              <div className="absolute left-0 top-0 ml-[-20px] mt-[-20px] w-10 h-10 rounded-full flex justify-center items-center bg-surfaceTeal">
                {comment.id}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
