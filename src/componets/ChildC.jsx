// import React from 'react'
// import{ data,data1 } from "./PropsDrilling";
// export default function ChildC() {
//   return (
//     <div>
//       <data.Consumer>
//      {   (name)=>{
//             return( <data1.Consumer>
//                { (age) =>{
//                     return(<> {name} {age}</>)
                    
//                 }}
//                 </data1.Consumer>
//             )
//         }
//     }
//       </data.Consumer>
//     </div>
//   )
// }
import React, { useContext } from 'react'
import{ data,data1 } from "./PropsDrilling";

export default function ChildC() {
    const name = useContext(data);
    const age = useContext(data1);
  return (
    <div>
      <p>{name}</p>
      <p>{age}</p>
    </div>
  )
}
