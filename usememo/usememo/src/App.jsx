import React,{useMemo,useState} from 'react'

const App = () => {
  const [number,setNumber]=useState(1);
  const [count,setCount]=useState(0);

  const doubledNumber=useMemo(()=>{
    console.log("Calculating...");
    return number*2;
  },[number])
  return (
    <div>
      <h1>Number: {number}</h1>
      <h1>Doubled: {doubledNumber}</h1>
      <button onClick={() => setNumber(number + 1)}>Number Change</button>
      <button onClick={()=> setCount(count+1)}>Count Change:{count}</button>
    </div>
  )
}

export default App