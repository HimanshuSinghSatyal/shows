import React, { useState ,useEffect } from 'react';

const MovieBookingForm = ({ selectedShow }) => {

  console.log(selectedShow);
  const [userData, setUserData] = useState({
    name: '',
    email: '',
  });
  
useEffect(() => {
    const storedUserData = JSON.parse (localStorage.getItem('userData'));
   if (storedUserData) {
    setUserData(storedUserData);
    }
  }, []); 

  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
  e.preventDefault(); localStorage.setItem( 'userData',JSON.stringify (userData));
    
    console.log(userData);
  };

  return (
    <form onSubmit={handleSubmit}>
      
      <h2 className="text-xl font-bold mb-2"> Booking for: {selectedShow?.name}</h2>
         
      <div>
        <label htmlFor="name">Name:</label>
        <input
          className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
      
          type="text"
          id="name"
          name="name"
          value={userData.name}
          onChange={handleInputChange}
          required
      />
      </div>
      <div>
        
        <label htmlFor="email">Email:</label>
        
        <input
          className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
        
          type="email"
          id="email"
          name="email"
          value={userData.email}
          onChange={handleInputChange}
          required
        />
      </div>

      
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4">
        Confirm Booking
      </button>
    </form>
  );
};

export default MovieBookingForm;
