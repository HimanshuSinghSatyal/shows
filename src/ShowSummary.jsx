import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import getShowData from './Api';

const ShowSummary = ({show, onSelectShow} ) => {
  
  //On reloading the page all the data will be lost because the API call for this page is not there, because I had no API to call single show.
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4"> Show_Name : {show.name}</h2>

      <p className="m-1 text-lg font-bold border border-gray-700 rounded-md px-2 py-1 max-w-max">
        Rating: <span className="text-rose-300">{show.rating?.average}/10</span>
      </p>

      <p className="text-gray-600">{show.summary}</p>

      <Link to="/show/booking">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4" onClick={() => onSelectShow(show)}>
          Book Ticket
        </button>
      </Link>
    </div>
  );
};

export default ShowSummary;
