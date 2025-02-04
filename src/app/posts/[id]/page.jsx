import getPost from "@/lib/getPost";
import React from "react";

const post = async ({ params }) => {
  const { id } = await params;
  const post = await getPost(id);
  return (
    <div className=" p-4 text-black">
      <p className="text-xl">Post No. {post.id}</p>
      <h2>
        <span className="font-bold">Heading:</span> {post.title}
      </h2>
      <p>
        {" "}
        <span className="font-bold">Description: </span>
        {post.body}{" "}
      </p>
    </div>
  );
};

export default post;
