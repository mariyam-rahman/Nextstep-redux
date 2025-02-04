import Link from "next/link";
import React from "react";

const Services = () => {
  const services = [
    { id: 1, title: "service 1", description: " service 1 description" },
    { id: 2, title: "service 2", description: " service 2 description" },
  ];

  return (
    <div className="text-center">
      <h2 className="text-4xl text-black p-5">Services</h2>
      <ul>
        {services.map((service) => (
          <li
            className="mb-2 font-bold p-5 text-black text-2xl border"
            key={service.id}
          >
            <Link href={`/services/${service.id}`}> {service.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Services;
