import CommentsLayout from "@/components/comments";
import getComments from "@/server/comments";

export default async function Comments() {
  const data = await getComments();
  console.log(data);
  return (
    <div className="w-full pt-10">
      <CommentsLayout data={data} />
    </div>
  );
}
