import { v4 as uuidv4 } from 'uuid';
 import {Add_todo} from '../actions/types.js';
 import {change_todo} from '../actions/types.js';
 import{delete_todo} from  '../actions/types.js';
 import{ecrase_todo} from '../actions/types.js';
const todos = [{todo:'React',id:uuidv4(), etat :false,isDone:false}, {todo:'Angular',id:uuidv4(),etat:false,isDone:false} ,{todo:'Vue js',id:uuidv4(),etat:false,isDone:false}]
const reducer=(state=todos,action)=>{
    switch (action.type) {
        case Add_todo:
            return [...state,action.payload];
        case change_todo:
            return(
                state.map((item)=>
                     { if(action.payload.id==item.id){
                       return action.payload}
                     else return item
                    }
                     )
        
                      );
        case delete_todo:
           return  state.filter((item)=>item.id!=action.payload.id) ;
        case ecrase_todo: 
        return(
                state.map((item)=>
                { if(action.payload.id==item.id){
                  return action.payload}
                else return item
               }
                )
              );
   
        default:
            return state
    }
    
}
export default reducer;
 /**[
                ...state.map(item => Object.assign({}, item, action.payload))
              ];**/
             /**x */ 
           
             