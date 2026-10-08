import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLayoutEffect } from 'react'
//UseEffect and UseLayoutEffect are same.
//useEffect and useLayoutEffect are both React hooks used to perform side effects after a component renders. 
// The main difference is their timing. useLayoutEffect runs after React updates the DOM but before the browser paints the changes on the screen. useEffect runs after the browser has painted the changes. 
// Therefore, use useLayoutEffect when you need to measure or modify the DOM before the user sees it, and use useEffect for normal side effects such as API calls, timers, and event listeners.

//useLayoutEffect → before paint
//useEffect → after paint
const App = () => {
  const [count, setCount] = useState(0);

  useLayoutEffect(()=>{
    console.log("count",count);
  },[count])

  console.log("render");

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>(setCount(count+1))}>Click</button>
    </div>
  )
}

export default App