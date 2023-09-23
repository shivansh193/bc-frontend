'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Container from '../components/Container';

function Form() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [aadhar, setAadhar] = useState(''); 
  const [result, setResult]=useState("Result appears here")
  // Function to handle input changes
  const res=(
    <Container>
        {result}
    </Container>
  )
  const handleInputChange = (event: any) => {
    setAadhar(event.target.value);
  };

  // Function to handle the API call
  const handleApiCall = () => {
    // Define the URL you want to fetch data from
    const apiUrl = `http://127.0.0.1:5000/api/get?UNIQUE_ID=${aadhar}`;

    // Make a GET request using Axios
    setIsLoading(true);
    axios
      .get(apiUrl)
      .then((response) => {
        console.log(response.data);
        setData(response.data);
        setResult(response.data)
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="flex flex-col gap-[6px]">
      <div className="w-full related">
        <div className="relative">
          <input
            type="text"
            value={aadhar}
            onChange={handleInputChange}
            className="
              peer
              w-full
              p-4
              pt-6
              font-dark
              bg-black
              border-2
              rounded-md
              outline-none
              transition
              disabled:opacity-70
              disabled:cursor-not-allowed"
          />
          <button
            onClick={handleApiCall}
            className={`
              flex
              justify-center
              items-center
              gap-[15px]
              disabled:opacity-70
              disabled:cursor-not-allowed
              rounded-lg
              hover:opacity-80
              transition
              w-full
              bg-orange-500
              border-black
              text-white
              py-3
              text-md
              font-semibold
              border-2
            `}
          >
            Submit
          </button>
          <>
          {res}
          </>
        </div>
      </div>
    </div>
  );
}

export default Form;
