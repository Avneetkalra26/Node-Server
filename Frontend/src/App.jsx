import React, { useEffect, useState } from 'react'
import axios from 'axios';
export default function App() {
  const [data, setdata] = useState("")
  useEffect(()=>{
    axios.get("http://localhost:3000/data").then((res)=>{
    console.log(res.data);
    setdata(res.data)
    })
  },[])
  return (
    <div>{data.name}</div>
  )
}
