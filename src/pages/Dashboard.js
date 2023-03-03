import React from "react";

function Dashboard() {
  return (
    <div className='bg-[#a52a2a14] m-auto max-w-[70%] p-8 rounded-md flex flex-col  overflow-x-clip shadow-md  flex-wrap justify-start items-center'>
      <h1 className='text-xl font-bold text-slate-700'>
        Smart Learning Spaces
      </h1>
      <p className='text-md text-slate-800 mt-8 text-center'>
        Welcome to our study room occupancy site! We are aware that finding a
        peaceful, distraction-free study space on campus can be difficult,
        particularly during busy times. We've developed a feature to make it
        easier for you to discover a free location to concentrate and finish
        your work by letting you monitor the live occupancy status of study
        rooms in real-time. You won't again need to waste time hunting for an
        empty study space around campus again. Simply click on the button in the
        side bar to know the status of rooms in different buildings.
      </p>
    </div>
  );
}

export default Dashboard;
