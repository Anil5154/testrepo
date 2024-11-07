import { useState } from "react";
import { Divider } from 'primereact/divider';

const Counter = () => {
    const [count,setCount]=useState(0);
   
  return (
    <div className="counter-con">
      <h1>{process.env.REACT_APP_NODE_ENV}</h1>
        <h1>Counter</h1>
        
        <Divider />
        <div className="d-flex align-items-center justify-content-center counter-btn">
        <button className="add-btn"  onClick={()=>setCount(prev=>++prev)}>Add </button>
        <p className="counter">{count}</p>
        <button className="minus-btn" onClick={()=>setCount(prev=>--prev)}>Minus</button>
        </div>
    </div>
  )
}

export default Counter