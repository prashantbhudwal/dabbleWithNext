import { fetchPost } from "../mock-api";
import { ClientComponent } from "./client-component";

export default async function ServerRendering() {
  const postId = 1;
  const post = await fetchPost(postId);

  return (
    <>
      <ClientComponent post={post} />
    </>
  );
}
