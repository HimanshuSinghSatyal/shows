import React, { useState, useEffect } from "react";
import getShowData from "./Api";
import ShowList from "./ShowList";

const ShowListPage = ({ onSelectShow }) => {

  const [showList, setShowList] = useState([]);

  useEffect(function() {
    getShowData().then((show) => {
      setShowList(show);
    })
  }, []);
  console.log("showPage", showList);

  return (
    <div>
      {showList.map((show) =>
        <ShowList key={show.id} show={show} onSelectShow={onSelectShow}
        />)}
    </div>
  )
}

export default ShowListPage;