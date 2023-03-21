import axios from "axios";
import { useEffect, useState } from "react";
export const ApiRequest = (url) => {
  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    await axios
      .get(url)
      .then((response) => {
        setIsLoaded(true);
        setData(response.data);
      })
      .catch((error) => {
        setError(error);
      });
  };

  return { error, isLoaded, data };
};
