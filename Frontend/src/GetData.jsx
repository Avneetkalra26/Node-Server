import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function GetData() {
  const [data, setdata] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/data'); 
        setdata(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {data ? (
        <p>{data.name}</p>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}
