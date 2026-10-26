import React, { useEffect, useState } from 'react'

const App = () => {
  const [first,setFirst]= useState(1);
  const [second,setSecond]= useState(100);

  const getData=()=>{
    console.log("loaded empty array");
  }

  useEffect(()=>{
    getData();
  },[])

  useEffect(()=>{
    getData();
  },[first,second])


  return (
    <div>
      <h1>First : {first}</h1>
      <h1>Second: {second}</h1>
      <button onClick={()=>setFirst((curr)=>curr+1)}>First</button>
      <button onClick={()=>setSecond((curr)=>curr+1)} >Second</button>
    </div>
  )
}

export default App