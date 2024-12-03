import React, { useState } from 'react'

const ColourBox = () => {

    const [colourInput, setColourInput]= useState("")
    const [box, setBox]= useState([])


    const handleColourInput = (e)=>{
        setColourInput(e.target.value)
    }
    const handleColourSubmit = (e)=>{
        e.preventDefault();
        setBox([...box,colourInput])
        setColourInput("")

       
    }


  return (
    <div>
      <input type="text" className='border border-black' value={colourInput} onChange={handleColourInput} />
      <button onClick={handleColourSubmit}>Submit</button>

     {box.map((box, index)=>(
        <div key={index} className='h-[150px] w-[150px] border border-black' style={{backgroundColor:box}}>
                <h1>colour of the box:{box}</h1>
        </div>
     ))}
    </div>
  )
}

export default ColourBox
