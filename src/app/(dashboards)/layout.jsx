import React from "react";

export default function dashLayout({ children }) {
  return (
    <div className="p-9">
      <div className="grid grid-cols-12 h-screen gap-6">
        <div className="col-span-3 border border-black">
          {/* sidebar */}
          <h2>Sidebar</h2>
        </div>
        <div className="col-span-9">
          {/* Dashboard content */}
          {children}
        </div>
      </div>
    </div>
  );
}
