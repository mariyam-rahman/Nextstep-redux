import getAllPosts from "@/lib/getAllPosts";
import Link from "next/link";
import React from "react";

const posts = async () => {
  const posts = await getAllPosts();
  return (
    <div className=" max-w-7xl mx-auto text-black">
      <h2 className="text-2xl">All Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>
              {post.id}. Title: {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default posts;
