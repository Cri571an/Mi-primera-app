import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TodoForm from './TodoForm';
import TodoList from './TodoList'; //carpeta del mismo nivel por eso el primer punto
/**
1 Stateful Components:
  -class
  -State
  -Lifecycle methods

2 Stateless Components (Funcional Components):
  -functions
  -No state
  -no Lifecycle methods

**/

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: '',
      todos: []
    };
  }

  uptadeValue = event => {
    this.setState({ value: event.target.value });
  };

  saveTodo = () => {
    if (this.state.value) {
      this.setState({todos: [...this.state.todos, {value: this.state.value, completed: false}], value: '' })
    }
  }

  deleteTodo = index =>{
    this.setState({todos: this.state.todos.filter((_ , i) => i !== index) }) //Crea un nuevo arreglo
  }

  toggleCompleted = index =>{
    const todos = this.state.todos;
    todos[index].completed = !todos[index].completed;
    this.setState({todos});
  }

  render(){
    console.log(this.state);
    return (
      <React.Fragment>
      <Typography align = 'center' variant='h2' gutterBottom>
    To-Do App
      </Typography>

      <Grid container justify="center">
      <Grid item>
      <TodoForm value={this.state.value} uptadeValue={this.uptadeValue} saveTodo={this.saveTodo}/>
      </Grid>
      </Grid>

      <Grid container justify="center">
        <Grid item md={8}>
          <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted} deleteTodo={this.deleteTodo} />
        </Grid>
      </Grid>
      </React.Fragment>
      );
    }
  }

export default App;
