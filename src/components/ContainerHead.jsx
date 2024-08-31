import React from "react";

function ContainerHead({head , children , className}) {
  return (
    <div className={`${className} flex flex-col gap-10`}>
      <div className=" text-2xl text-center sm:text-3xl font-semibold">
        {head}
      </div>
      {children}
    </div>
  );
}

export default ContainerHead;
