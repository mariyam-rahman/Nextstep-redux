import { notFound } from "next/navigation";
import React from "react";

const Service = async ({ params }) => {
  const { id } = await params;
  if (id === "3") {
    notFound();
  }
  return <div className="text-black">the service id is : {id}</div>;
};

export default Service;
