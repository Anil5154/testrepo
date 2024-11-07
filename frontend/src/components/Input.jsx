import { useState } from "react"

const Input = () => {
 const [state,setState]=useState("");

  return (
    <div className="d-flex align-items-center justify-content-center input-conter">
        <input type="text" value={state} onChange={(e)=>{setState(e.target.value)}}/>
        <p>{state}</p>
    </div>
  )
}

export default Input