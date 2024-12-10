import { useState } from 'react';
import './App.css';
// import ColourBox from "./ColourBox"

function App() {
  const [color, setColor] = useState('')
  const [colorBox, setColorBox] = useState([])

  const colorChange = (e) => {
    setColor(e.target.value)
  }
  const getColor = (e) => {
    e.preventDefault()
    setColorBox([...colorBox,color])
    setColor("")
  }
  return (
    <div className="App">
      <h1>Easy Task 1</h1>
      {
        colorBox.map((color)=>(
          <div className='h-[150px] w-[150px] border border-black' style={{backgroundColor:color}}>
            {color}
          </div>
        ))
      }
      <input className='border border-black' type="text"
        onChange={colorChange}
        placeholder='Add Color' value={color}
      /><br />
      <button onClick={getColor}>Submit</button>
    </div>
      // <ColourBox/>
  );
}

export default App;
