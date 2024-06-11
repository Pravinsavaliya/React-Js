import React, { useState,useMemo } from 'react'

export default function UseDemo() {
    const [add,setAdd] = useState(0);
    const [counter,setCounetr] = useState(0);

    const multiply = useMemo(()=>{
        console.log("multiply")
        return add * 10;
    },[add])
    const test = useMemo(()=>{
        console.log("test")
        return counter * 10;
    },[counter])
    
  return (
    <>
      <h3>Add : {add}</h3>
      <h4>Multiply :{multiply}</h4>
      <button onClick={()=>setAdd(add +2)}>Add</button>
      <hr />
      <h3>Counter : {counter}</h3>
      <h4>Test : {test}</h4>
      <button onClick={()=>setCounetr(counter + 5)}>counter</button>
    </>
  )
}
