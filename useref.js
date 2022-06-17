import React ,{useState,useRef, useEffect} from 'react'

function Useref() {
    const iref=useRef();
    const iref1=useRef();
    const [val ,setVal]=useState('')
    const [val1 ,setVal1]=useState('')
    
    // button click to show

    const [show,setShow]=useState(false)
    
useEffect(()=>
  iref.current.focus(),[]
)
  
   
  return (
    <>
    
<center>
    <input type="text"   placeholder="text"  value={val} ref={iref} onChange={(e)=>setVal(e.target.value)}/><br></br><br></br>
    <input type="text" placeholder="text" value={val1}  ref={iref1} onChange={(e)=>setVal1(e.target.value)}/><br></br><br></br>
  
  {/* {{
  show ? {val===val1?null:<bold>val not same</bold>}:null
} */}
  



   {/* display message when button clicked */}

 { show ? val===val1 ? null:<bold>passwords dont match</bold>:null}
   
   <br></br>
   <button onClick={()=>setShow(true)}>submit</button>

    
    
   </center>
    </>
  )
}

export default Useref;