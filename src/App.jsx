import React, { useState } from 'react';
import getShowData from './Api';
import ShowListPage from './ShowListPage';
import ShowSummary from './ShowSummary';
import { Route, Routes } from "react-router-dom";
import MovieBookingForm from "./MoveBookingForm";



export default function App() {

  const [selectedShow, setSelectedShow] = useState(null);

  const handleShowSelect = (show) => {
    setSelectedShow(show);
  };

  return (
    <>
      <Routes>
        <Route path="/"
          element={<ShowListPage 
  onSelectShow={handleShowSelect}               />} />
        <Route path="/show/id"
          element={<ShowSummary
          show={selectedShow}  onSelectShow={handleShowSelect} />} />

        <Route path="/show/booking"
          element={<MovieBookingForm
            selectedShow={selectedShow} />} />
      </Routes>
    </>
  )
}
