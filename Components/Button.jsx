import React from "react";

const Button = (props) => {
  return (
    <>
      <button className="bg-indigo-500 px-6 rounded-full md:ml-8 hover:bg-indigo-400 duration-200 hover:grow-0 text-white font-serif py-2 p">
        {props.children}
      </button>
    </>
  );
};

export default Button;
