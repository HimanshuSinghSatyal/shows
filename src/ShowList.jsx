import React from 'react';
import { Link } from 'react-router-dom';

const ShowList = ({ show, onSelectShow }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-2">{show.name}</h2>

        <div className="flex space-x-3 my-2 bg-gray-200 p-2 rounded-sm">
          {show.genres.map((genres) => <span> genras :{genres} </span>)}
        </div>

        <p className="m-1 text-lg font-bold border border-gray-700 rounded-md px-2 py-1 max-w-max">
          Rating: <span className="text-rose-300">{show.rating?.average}/10</span>
        </p>

        {show.image && (
          <img
            src={show.image.medium}
            alt={show.name}
            className="w-full h-48 object-cover mb-4"
          />
        )}

        <Link to="/show/id">
          <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4" onClick={ ()=>  onSelectShow(show)}>
      
          View Summary
            </button>
        </Link>

      </div>
    </div>

  )
};


export default ShowList;
