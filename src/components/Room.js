import { useEffect, useState } from "react";
import { TbSquare, TbTemperatureCelsius } from "react-icons/tb";
import { FaTemperatureLow } from "react-icons/fa";
import { GiGasMask } from "react-icons/gi";
import { MdOutlineGroups, MdOutlineMeetingRoom } from "react-icons/md";

function Room({ rooms }) {
  const { temperature, co2, humidity, isAvailable } = rooms;

  console.log(co2);
  const [room, setRoom] = useState();

  useEffect(() => {
    setRoom(rooms);
    console.log("rerendering");
  }, [rooms]);
  return (
    <div className='h-screen w-full flex  md:justify-start  justify-start items-center  flex-col gap-y-10'>
      {/* rooms container */}
      <div className='flex flex-wrap  flex-row justify-center items-center mt-8 w-full border-b-1 border-solid border-[red]'>
        {/* {rooms.map((room, index) => ( */}
        {rooms && rooms.isAvailable ? (
          <div className='flex flex-col relative justify-center items-center m-8 hover:scale-105 duration-300 hover:cursor-pointer'>
            <MdOutlineMeetingRoom className='h-24 w-24 md:h-40 md:w-49 lg:h-48 flex flex-wrap lg:w-48 xl:h-62 xl:w-62 relative  text-[#1fa02e]'></MdOutlineMeetingRoom>
            <h1 className='text-[green] font-bold '>Room is Available</h1>

            <div className='flex flex-wrap flex-row items-center mt-2 justify-between'>
              <div className='ml-4 inline flex justify-between items-center'>
                <GiGasMask className='text-[green] mr-2' />
                <p className='text-[green]  '>
                  Co2 level = {Math.trunc(rooms.co2)} ppm
                </p>
              </div>
              <div className='ml-4 inline flex justify-between items-center'>
                <FaTemperatureLow className='text-[green] mr-2'></FaTemperatureLow>
                <p className='text-[green]  '>
                  Temperature = {Math.trunc(rooms.temperature)}
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className='flex flex-col relative justify-center items-center m-8 hover:scale-105 duration-300 hover:cursor-pointer'>
            <MdOutlineGroups className='h-24 w-24 md:h-40 md:w-49 lg:h-48 flex flex-wrap lg:w-48 xl:h-62 xl:w-62 relative   text-[#ff2200]'></MdOutlineGroups>
            <h1 className='text-[red] font-bold '>Room is Reserved</h1>

            <div className='flex flex-wrap flex-row items-center mt-2 justify-between'>
              <div className='ml-4 inline flex justify-between items-center'>
                <GiGasMask className='text-[red] mr-2' />
                <p className='text-[red]  '>
                  Co2 level = {Math.trunc(rooms.co2)} ppm
                </p>
              </div>
              <div className='ml-4 inline flex justify-between items-center'>
                <TbTemperatureCelsius className='text-[red] mr-2'></TbTemperatureCelsius>
                <p className='text-[red]  '>
                  Temperature = {Math.trunc(rooms.temperature)}
                </p>
              </div>
            </div>
          </div>
        )}
        {/* <h1>{isAvailabe}</h1> */}
        {/* ))} */}
      </div>
    </div>
  );
}

export default Room;
