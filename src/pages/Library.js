import Room from "../components/Room";
import axios from "axios";
import React, { useEffect, useState } from "react";

function Library() {
  const [rooms, setRooms] = useState();
  const [availability, setAvailability] = useState([false]);
  const [count, setCount] = useState(0);

  const fetchData = async () => {
    await axios
      .get("http://141.26.157.131/get-library-data")
      .then((res) => {
        console.log(res);
        setRooms(res.data);
        // if (count === 5) {
        //   let roomsData = rooms;
        //   roomsData.shift();
        //   roomsData.push(res.data);
        //   setRooms(roomsData);
        //   console.log(rooms);
        // } else {
        //   setRooms((rooms) => [...rooms, res.data]);
        //   console.log(rooms);
        //   setCount(count + 1);
        // }
      })
      .then((err) => {
        console.log(err);
      });
  };

  // execute every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      fetchData();
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, [rooms]);

  // execute once
  useEffect(() => {
    fetchData();
  }, []);
  return <>{rooms && <Room key={rooms.isAvailable} rooms={rooms} />}</>;
}

export default Library;
