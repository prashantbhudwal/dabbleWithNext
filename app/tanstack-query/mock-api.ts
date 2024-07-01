import axios from "axios";

export type Post = {
  userId: string;
  id: number;
  title: string;
  body: string;
};

export const anotherAsyncFunction = async function () {
  const testPromise = new Promise((resolve, reject) => {
    console.log(resolve, reject);
    setTimeout(() => {
      if (Math.random() > 0.5) return resolve("Authenticated");
      return reject("NOT Authenticated");
    }, 1000);
  });
  return testPromise;
};

export const asyncFunctionThree = async function () {
  return await anotherAsyncFunction();
};

export const myAsyncFunction = async function (): Promise<Post> {
  console.log("I ran");
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.25) reject();
    setTimeout(() => {
      resolve({
        id: 2,
        userId: "123",
        title: "The Dogs of Wasseypur",
        body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus iste voluptas optio ratione numquam ducimus quae. Quasi perferendis excepturi, sint ipsa voluptatum quo nisi, doloribus vitae perspiciatis ducimus fuga. Quas ipsa provident quo aperiam error beatae possimus, obcaecati amet. Animi!",
      });
    }, 1000); // Adjust the timeout as needed
  });
};

export const fetchPosts = async function () {
  const { data: posts } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return posts;
};

export const fetchPost = async function (postId: number) {
  const { data: post } = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
    {}
  );
  console.log(post);
  return post;
};
