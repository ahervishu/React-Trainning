import React, { useState } from 'react'

export default function CounterApp() {
    const [counter, setCounter] = useState(0);
  return (
    <div>
        <h1>CounterApp</h1>
        <div style={{display:'flex', justifyContent:'center',gap:'15px'}}>
            <button style={{width:'55px', backgroundColor:'red'}} onClick={()=>setCounter(counter - 1)}> - </button>
            <h3>counter is : {counter} </h3>
            <button style={{width:'55px', backgroundColor:'green'}} onClick={()=>setCounter(counter + 1)}> + </button>
        </div>
    </div>
  )
}
