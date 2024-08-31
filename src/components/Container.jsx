import React from "react";

function Container({ children , mainClassNamee,  className , ...props }) {
  return (
    <div { ...props } className={`${mainClassNamee}  w-full flex justify-center p-6 sm:p-8 md:p-10`}>
      <div className={`${className} lg:w-[70rem] w-full`}>{children}</div>
    </div>
  );
}

export default Container;
