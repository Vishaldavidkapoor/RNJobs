import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setiIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    params: { ...query },
    headers: {
      "X-RapidAPI-Key": '3132f4a254msh669a30c07656042p19fe33jsn817b4ef1b024',
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
  };

  const fetchData = async () => {
    setiIsLoading(true);

    try {
      const response = await axios.request(options);
      setData(response.data.data);
      setiIsLoading(false);
    } catch (err) {
      setError(err);
      alert("Error occurred");
    } finally {
      setiIsLoading(false);
    }
  };

useEffect(()=>{
    fetchData();
},[])

const refetch = () =>{
    setiIsLoading(true);
    fetchData();
}

return {data, isLoading, error, refetch}

};

export default useFetch;
