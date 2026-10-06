import React,{useState,useEffect} from 'react'
//Suppose you want to print something whenever count changes is called use effect hook
const App = () => {
  const [count,setCount]=useState(0);

  useEffect(()=>{
    console.log("useEffect called : ",count);
  },[count])
  const display=()=>{
    setCount(count+1);
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={display}>Click Me</button>
    </div>
  )
}

export default App