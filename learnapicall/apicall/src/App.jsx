import React, { useEffect } from 'react'
import axios from 'axios' 

const App = () => {

  // async function apicall(){
  //   const response= await fetch("https://official-joke-api.appspot.com/random_joke");
  //   const data= await response.json();
  //   console.log(data);
  // }
   
  async function apicall(){
    const response= await axios.get("https://official-joke-api.appspot.com/random_joke");
  
    console.log(response.data);
  }

  useEffect(()=>{
    apicall();
  },[])

  return (
    <div>
      <h1>Api Call</h1>
      <button onClick={apicall}>Api Call</button>
    </div>
  )
}

export default App