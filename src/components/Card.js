import React from "react";

function Card({ Message }) {
  return (
    <div className='bg-slate-200 shadow-lg flex-wrap rounded-lg flex justify-center items-center text-black w-[70%] h-[70%] overflow-y-auto'>
      <p>{Message}</p>
    </div>
  );
}

export default Card;
