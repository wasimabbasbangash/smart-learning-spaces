import React from "react";

import FullLogo from "../assets/img/full_logo.png";
import Logo from "../assets/img/uni-koblenz-logo.png";
// icons for departments
import { BsFillCircleFill } from "react-icons/bs";

function Main({ children }) {
  return (
    <div className='h-screen w-full flex  md:justify-start  justify-start items-center  overflow-x-scroll flex-col gap-y-10'>
      {/* information bar  */}
      <div className=' flex flex-row  w-full gap-y-10 justify-evenly shadow-md p-4 '>
        <h1 className='flex justify-start items-center'>
          <BsFillCircleFill className='text-[red] text-3xl font-bold mr-2' /> =
          Occupied
        </h1>
        <h1
          className='flex justify-start items-center'
          data-tooltip-target='tooltip-animation'
        >
          <BsFillCircleFill className='text-[green] text-3xl font-bold mr-2' />{" "}
          = Available
        </h1>
      </div>
      <div className='fixed top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] opacity-20 z-[-10] -rotate-45'>
        <img src={Logo}></img>
      </div>
      <div className='h-screen w-full flex  md:justify-start  justify-start items-center   overflow-y-scroll flex-col gap-y-10'>
        {children}
      </div>
      <img
        className='absolute bottom-1 right-1 h-24 w-24 md:h-40 md:w-40 lg:h-48 lg:w-48 object-contain'
        src={FullLogo}
      ></img>
    </div>
  );
}

export default Main;
