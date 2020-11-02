import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import{useState} from'react';
import {editTodo} from './actions/todoactions'; 
import {useDispatch} from 'react-redux';
import{deleteTodo} from './actions/todoactions';
import{ecraseTodo} from'./actions/todoactions';

const element = <FontAwesomeIcon icon={faCheckCircle} style={{fontSize: "xlarge",color:"rgb(241, 42, 241)"}}/>
const Task =(props)=>{
    const[input,setInput]=useState(props.el.todo);
    const dispatch=useDispatch();
    const[editable,setEditable]=useState(false);
  
    
  
    return (
        < div className='row my-2 align-items-center' key={props.i}>
            <div className='col-1'><div onClick={()=>{ dispatch(ecraseTodo({...props.el,isDone:(!(props.el.isDone))}))}}>{element}</div></div>
           <div className='col-6'>{editable?<input type='text' style={{fontWeight:'bold'}} className="form-control" value={input}   onChange={e=>setInput(e.target.value)}/>:<h3 className={props.el.isDone? 'hashed':null}>{props.el.todo}</h3>}</div>         
            <div className='col-2'>
             <button className='btn  mr-2 outline ' onClick={()=>{
                 setEditable(!editable);
                 dispatch(editTodo({...props.el,todo:input}));
                 }}>{editable? 'Update':'Edit'}</button>
             </div>
             <div className='col-2 ml-3' >
            <button className='btn outline ' onClick={()=>{
            dispatch(deleteTodo({...props.el,etat:true}))
            }}>Delete</button>
            </div>
            
        </div>
    )
    }
    export default Task

