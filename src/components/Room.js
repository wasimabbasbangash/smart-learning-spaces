import { useEffect, useState } from "react";
import { TbTemperatureCelsius } from "react-icons/tb";
import { FaTemperatureLow } from "react-icons/fa";
import { GiGasMask } from "react-icons/gi";
import { MdOutlineGroups, MdOutlineMeetingRoom } from "react-icons/md";

function Room({ rooms }) {
  const [room, setRoom] = useState();

  useEffect(() => {
    setRoom(rooms);
    console.log("rerendering");
  }, [rooms]);

  return (
    <div className='h-screen w-full flex  md:justify-start  justify-start items-center  flex-col gap-y-10 overflow-y-scroll'>
      {/* rooms container */}
      <div className='flex flex-wrap  flex-row justify-start pl-8 items-center  w-full border-b-1 border-solid border-[red]'>
        {/* {rooms.map((room, index) => ( */}
        {rooms &&
          rooms.map((room, index) =>
            room.isAvailable ? (
              <div className='flex flex-col relative justify-center items-center p-8 m-8 sm:m-2 sm:p-2 rounded-md shadow-lg bg-[#ffffff8a] hover:scale-105 duration-300 hover:cursor-pointer'>
                <MdOutlineMeetingRoom className='h-16 w-16 md:h-20 md:w-20 lg:h-28 flex flex-wrap lg:w-28 xl:h-40 xl:w-40 relative p-4 text-[#1fa02e]'></MdOutlineMeetingRoom>
                {room.isFake ? (
                  <p className='font-bold text-[#dab269] tracking-wide'>
                    Dummy Data
                  </p>
                ) : (
                  <h1 className='text-[green] font-bold '>Room is Available</h1>
                )}
                <h1 className='absolute top-3 left-3 text-lg font-bold border-[green] p-2 text-[green]'>
                  {index + 1}
                </h1>
                <div className='flex flex-wrap flex-row  md:flex-col items-center mt-2 justify-start w-full sm:p-2 md:p-4 p-8'>
                  <div className='flex justify-start items-center w-full'>
                    <GiGasMask className='text-[green] mr-2' />
                    <p className='text-[green] ml-2 '>
                      Co2 level = {Math.trunc(room.co2)} ppm
                    </p>
                  </div>
                  <div className='flex justify-start items-center w-full'>
                    <FaTemperatureLow className='text-[green] mr-2'></FaTemperatureLow>
                    <p className='text-[green] ml-2 '>
                      Temperature = {Math.trunc(room.temperature)}
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className='flex flex-col  relative justify-center items-center p-8 m-8 sm:m-2 sm:p-2 rounded-xl shadow-xl bg-[#ffffff8a] hover:scale-105 duration-300 hover:cursor-pointer'>
                <MdOutlineGroups className='h-16 w-16 md:h-20 md:w-20 lg:h-28 flex flex-wrap lg:w-28 xl:h-40 xl:w-40 relative p-2 text-[#ff2200]'></MdOutlineGroups>
                {room.isFake ? (
                  <p className='font-bold text-[#dab269] tracking-wide'>
                    Dummy Data
                  </p>
                ) : (
                  <h1 className='text-[#ff0c0cad] font-bold '>
                    Room is Reserved
                  </h1>
                )}
                <h1 className='absolute top-3 left-3 text-lg font-bold  p-2 text-[red]'>
                  {index + 1}
                </h1>
                <div className='flex flex-wrap flex-row md:flex-col items-center mt-2 justify-start w-full sm:p-2 md:p-4 p-8'>
                  <div className='  flex justify-start items-center w-full'>
                    <GiGasMask className='text-[#ff0c0cad] mr-2' />
                    <p className='text-[#ff0c0cad]  ml-2'>
                      Co2 level = {Math.trunc(room.co2)} ppm
                    </p>
                  </div>
                  <div className=' flex justify-start items-center w-full'>
                    <TbTemperatureCelsius className='text-[red] mr-2'></TbTemperatureCelsius>
                    <p className='text-[red]  ml-2'>
                      Temperature = {Math.trunc(room.temperature)}
                    </p>
                  </div>
                </div>
              </div>
            )
          )}
      </div>
    </div>
  );
}

export default Room;
