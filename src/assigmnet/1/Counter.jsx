import { useState } from "react"

const Counter = () => {
    const [counter,setCounter] = useState(0)
  return (
    <div>
        <button onClick={()=>setCounter(counter+1)}>Increment</button>
          <button onClick={()=>setCounter(counter - 1)}>Decrement</button>
        <h4>{counter}</h4>
    </div>
  )
}
export default Counter