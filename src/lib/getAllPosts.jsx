import React from "react";

const getAllPosts = async () => {
  const result = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=30"
  );

  if (!result.ok) {
    throw new Error("There was an error fetching posts");
  }
  return result.json();
};

export default getAllPosts;
