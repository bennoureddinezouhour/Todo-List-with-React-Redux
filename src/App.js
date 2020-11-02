import React from 'react';
import './App.css';
import {useSelector,useDispatch} from 'react-redux';
import Task from'./task';
import{useState} from'react';
import{addTodo, editTodo} from'./actions/todoactions';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const list=useSelector(state=>state.reducer);
  const[input,setInput]=useState('');
  const dispatch=useDispatch();
 return(
   <div className="app">
     <div>
     <h1 >Todo List </h1>
     <div className='row my-4'>
       <div className='col-10'> 
     <input  className="form-control outline " type='text' onChange={(e)=>setInput(e.target.value)}/>
     </div>
      <div className='col-2'>
      <button className='btn btn-primary' onClick={()=>dispatch(addTodo({id:uuidv4(),todo:input}))}>Add</button>
      </div>
     
     </div>
   <div >{
   list.map((el,i)=> <Task el={el} key={i} />)}
   </div>
 </div>
 </div>
 ) 
}

export default App;
