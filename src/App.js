import React, { Component } from 'react';
import Navbar from './components/Navbar';
// import Todos from './components/Todos';
import About from './components/About';
import TodosList from './components/TodosList';
import Post from './components/Post';
// import AddTodo from './components/AddTodo';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// import Ninjas from './Ninjas';
// import AddNinja from './AddNinja';

class App extends Component {
  // state = {
  //   todos: [
  //     {id: 1, content: 'buy some milk'},
  //     {id: 2, content: 'play Mario Kart'}
  //   ]
  // }
  // addTodo = (todo) => {
  //   todo.id = Math.random();
  //   let todos = [...this.state.todos, todo]
  //   this.setState({
  //     todos
  //   })
  // }
  // deleteTodo = (id) => {
  //   const todos = this.state.todos.filter(todo => {
  //     return todo.id !== id;
  //   })
  //   this.setState({
  //     todos
  //   })
  // }
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={TodosList} />
            <Route path="/about" component={About} />
            <Route path="/:post_id" component={Post} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;

// addNinja = ninja => {
//   ninja.id = Math.random();
//   let newNinja = [...this.state.ninjas, ninja];
//   this.setState({
//     ninjas: newNinja
//   })
// }

// deleteNinja = (id) => {
//   let ninjas = this.state.ninjas.filter(ninja => {
//     console.log(ninja.id !== id);
//     return ninja.id !== id
//   });
//   this.setState({
//     ninjas: ninjas
//   })
// }

// render() {
//   return ( 
//     <div className="App">
//       <h1>Olar</h1>
//       <Ninjas ninjas={this.state.ninjas} deleteNinja={this.deleteNinja}/>
//       <AddNinja addNinja={this.addNinja} />
//     </div>
//   )
// }