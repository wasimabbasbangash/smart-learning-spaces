import Room from "../components/Room";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { ApiRequest } from "../services/ApiService";

const REACT_APP_BASE_URL = "http://141.26.157.131/";

function Library() {
  const [rooms, setRooms] = useState();

  const fetchData = async () => {
    await axios
      .get(REACT_APP_BASE_URL + "get-library-data")
      .then((res) => {
        setRooms(res.data);
      })
      .then((err) => {
        console.log(err);
      });

    // const { data, error, isLoaded } = ApiRequest(
    //   "https://jsonplaceholder.typicode.com/todos"
    // );
    // if (data) {
    //   setRooms(data);
    // } else {
    //   console.log(error);
    // }
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
