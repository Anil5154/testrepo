import { Avatar } from "primereact/avatar"
import { Button } from "primereact/button"
import { useState } from "react";


const DemoPrimeTest = () => {
    const [show,setShow]=useState(false);
  return (
    <>
    <Button  data-testid="prime-button" label="button" onClick={()=>setShow(prev=>!prev)}></Button>
        {
          show &&<Avatar label="P" size="xlarge" />
        }
    </>
  )
}

export default DemoPrimeTest