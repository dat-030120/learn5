import logo from './logo.svg';
import './App.css';
import { useRef } from 'react';
 
function App() {
  const inputRef =useRef(null)
  function onAddToCard(text){
    alert(text)
  }
  const way2 =(text)=>{
    alert(text)
  }
  const way3 =()=>{
    alert(inputRef.current.value)
  }
  return (
    <div className="container">
      <div className='panel'>
        <div className='panel-heading'>Add User</div>
        <div className='panel-body'>
            <div className='form-group'>
              <input className='form-control' type='text' name id placeholder='Info User'  ref={inputRef}/>
            </div>
            <button className='btn btn-primary' onClick={()=>onAddToCard(inputRef.current.value)}>gữi 01 </button>
            <button className='btn btn-primary 'onClick={()=>way2(inputRef.current.value)}>gữi 02 </button>
            <button className='btn btn-primary'onClick={way3}>gữi 03 </button>
        </div>
      </div>
    </div>
  );
}

export default App;
