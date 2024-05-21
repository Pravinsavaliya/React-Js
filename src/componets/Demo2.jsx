// stateless components
// hooks 
import React, { useState } from 'react'

export default function Demo2() {
 const [name,setNmae]= useState("pravin");
 const [count,setCount]= useState(0);
 const [city,setCity]= useState("Ahemdabad")
  return (
    <div>
      <h2>my name is {name}</h2>
      <hr />
      <button onClick={()=>setNmae("Kushal savaliya")}>Change Name</button>
      <hr />
      <h3>count : {count}</h3>
      <button onClick={()=>setCount(count+1)}>Increment </button>
      <button onClick={()=>setCount(count - 1)}>Decrement</button>
      <hr />
      <h3>my city name : {city}</h3>
      <button onClick={()=> setCity("Amreli")}>city name Change</button>
    </div>
  )
}
