import React from "react";
import axios from "axios";


const getShowData = async () => {
  const response = await
    axios.get("https://api.tvmaze.com/search/shows?q=all");

  const shows = await response.data.map((item) => item.show);

  console.log("data", shows) //response.data.map((item)=> item.show));
  return shows;

}

export default getShowData;