import React, { createContext } from 'react'
import ChildA from './ChildA'

const data = createContext();
const data1 = createContext();
export default function PropsDrilling() {
    // context API -createContext,provider,consumer
    // usecontext
    const name = "Kushal savaliya";
    const age = 20;
  return (
    <>
    <data.Provider value={name}> 
    <data1.Provider value={age}>
      <ChildA/>
      </data1.Provider>
      </data.Provider>
    </>
  )
}
export {data,data1};