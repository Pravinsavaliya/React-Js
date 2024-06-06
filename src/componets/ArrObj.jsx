import React from 'react'
import { useState } from 'react'

export default function ArrObj() {
  const [formData,setFormData] = useState([]);
  const [ischecked,setIsChecked] = useState(false);
  const [readioValue,setReadioValue] = useState();

  const handleForm=(e)=>{
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const checkboxValue = ischecked;
    const newObj = {name, email , checkboxValue,readioValue}
    setFormData([...formData,newObj]);
    console.log(name,email,checkboxValue,readioValue);
    e.target.reset();
  }
  const handleGender = (e) =>{
    setReadioValue(e.target.value);
    e.target.reset();


  }
  return ( 
    <>
    <div>
      <form onSubmit={handleForm}>
        <h1>Form Data</h1>
        <input type="text" name="name" placeholder='Enter Your Name'  />
        <br /><br />
        <input type="email" name="email" placeholder='Enter Your Email' />
        <br /><br />
        <input type="checkbox" checked={ischecked} onChange={()=>setIsChecked(!ischecked)} id='tnc' />
        <label htmlFor="tnc">Terms and Condition</label>
        <br /><br />
        <input type="radio" name='gender' id='male' value="male" onChange={handleGender}/>
        <label htmlFor="male">Male</label>
        <input type="radio" name='gender' id='female' value="female" onChange={handleGender} />
        <label htmlFor="female">Female</label>
        <br /><br />
        <button type='submit'>Submit</button>
      </form>
      </div>
      
        {formData.map((i,index) =>(
          <div key={index}>
            <p>My Name is : {i.name}</p>
            <p>My Email is : {i.email}</p>
            <p>Checkbox:{i.checkboxValue? "Checked":"Unchecked"}</p>
            <p>Grnder is : {i.readioValue}</p>

          </div>
        ))}
      
    </>
  )
}
