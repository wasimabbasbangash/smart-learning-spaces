import Room from "../components/Room";
import axios from "axios";
import React, { useEffect, useState } from "react";

function Library() {
  const [rooms, setRooms] = useState();
  const [availability, setAvailability] = useState([false]);
  const [count, setCount] = useState(0);

  const fetchData = async () => {
    await axios
      .get("http://localhost:3001/get-library-data")
      .then((res) => {
        setRooms(res.data);
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
