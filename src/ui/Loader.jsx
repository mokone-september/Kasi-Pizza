import React from "react";

export default function Loader() {
  return (
    <div className=" absolute inset-0 flex items-center justify-center bg-slate-200/20 backdrop-blue-sm ">
      <div className="loader"></div>
    </div>
  );
}
