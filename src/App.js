import { useState } from 'react';
import './App.css';

function App() {

  const[num1,setNum1] = useState();
  const[num2,setNum2] = useState();
  const[Add,setAdd] = useState();

  const FirstHandleChange = (e) =>{
    // console.log(e.target.value)
    setNum1(e.target.value);
  }

  const SecondHandleChange = (e) =>{
    // console.log(e.target.value)
    setNum2(e.target.value);
  }

  const sum = (e) =>{
    e.preventDefault();
    setAdd(parseInt(num1)+parseInt(num2));
    // console.log((parseInt(num1)+parseInt(num2)))
  }

  return (
    <div className="app">
      <div className='container'>
        <h2 className='center'>Sum Calculator</h2>
        <form onSubmit={sum}>
          <div>
            <label>First Number</label>
            <input type='number' 
            placeholder='Enter First Number' 
            value ={num1} 
            onChange={FirstHandleChange}></input>
          </div>

          <div>
            <label>Second Number</label>
            <input type='number' 
            placeholder='Enter Second Number' 
            value ={num2} 
            onChange={SecondHandleChange}></input>
          </div>

          <div>
            <button className='btn' type='submit'>Submit</button>
          </div>  

          <div className='center'>
            <h3>Your Sum is: {Add}</h3>
          </div>

        </form>

      </div>
    </div>
  );
}

export default App;
