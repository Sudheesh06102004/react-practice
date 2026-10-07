import React from 'react'
import {useReducer} from 'react'


function usereducerFn(state,action){
  if(action.type==="increment"){
    return state+1;
  }
  if(action.type==="decrement"){
    return state-1;
  }
  return state;
}


const App = () => {
  //const [count, setCount] = React.useState(0);
  const [state,dispatch]=useReducer(usereducerFn,0);

  const increment=()=>{
    //setCount(curr=>curr+1);
    dispatch({type:"increment"});
  }

  const decrement=()=>{
    //setCount(curr=>curr-1);
    dispatch({type:"decrement"});
  }

  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent:"center", gap:"20px" }}>
      <button onClick={increment}>+</button>
      <h1>{state}</h1>
      <button onClick={decrement}>-</button>
    </div>
  )
}

export default App