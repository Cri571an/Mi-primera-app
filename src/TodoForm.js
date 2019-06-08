import React from "react";
import TextField from '@material-ui/core/TextField';

const TodoForm = props =>{
  const {value, saveTodo, uptadeValue} = props;
  return(
  <form onSubmit={e =>{
    e.preventDefault();
    saveTodo();
  }}>

  <TextField type='Text' margin='normal' placeholder='Add todo' onChange={uptadeValue} value={value }/>
  </form>
)
}

export default TodoForm;
