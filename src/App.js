import React from 'react';
import Navbar from './components/Nav/Navbar';
// import Todo from './components/Todo/Todo';
import TodoForm from './components/Todo/TodoForm';
import TodoList from './components/Todo/TodoList';


function getUniqueId() {
  return new Date().getTime().toString(36) + '-' + Math.random().toString(36);
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      item: '',
      link: ''
    };
    this.checkTodo = this.checkTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.updateItem = this.updateItem.bind(this);
    this.updateLink = this.updateLink.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.purge = this.purge.bind(this);
  }


  purge() {
    // if(!confirm('Are you sure?')) {
    //   return;
    // }

    const todos = this.state.todos.filter(todo => {
      return !todo.isDone;
    });
    this.setState({
      todos: todos
    });
  }

  addTodo(e) {
    e.preventDefault();

    if (this.state.item.trim() === '') {
      return;
    }

    const item = {
      id: getUniqueId(),
      title: this.state.item,
      link: this.state.link,
      isDone: false
    };

    const todos = this.state.todos.slice();
    todos.unshift(item);
    this.setState({
      todos: todos,
      item: '',
      link: '',
    });
  }

  deleteTodo(todo) {
    // if(!confirm('Are you sure?')) {
    //   return;
    // }

    const todos = this.state.todos.slice();
    const pos = this.state.todos.indexOf(todo);

    todos.splice(pos, 1);
    this.setState({
      todos: todos
    });
  }

  checkTodo(todo) {
    const todos = this.state.todos.map(todo => {
      return {id: todo.id, title: todo.title, link: todo.link, isDone: todo.isDone};
    });

    const pos = this.state.todos.map(todo => {
      return todo.id;
    }).indexOf(todo.id);

    todos[pos].isDone = !todos[pos].isDone;
    this.setState({
      todos: todos
    });
  }

  updateItem(e) {
    this.setState({
      item: e.target.value
    });
  }

  updateLink(e) {
    this.setState({
      link: e.target.value
    });
  }

  componentDidUpdate() {
    localStorage.setItem('todos', JSON.stringify(this.state.todos));
  }

  componentDidMount() {
    this.setState({
      todos: JSON.parse(localStorage.getItem('todos')) || []
    });
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <main>
          <div className="container">
              <TodoForm
                item={this.state.item}
                link={this.state.link}
                updateItem={this.updateItem}
                updateLink={this.updateLink}
                addTodo={this.addTodo}
              />
              <TodoList
                todos={this.state.todos}
                checkTodo={this.checkTodo}
                deleteTodo={this.deleteTodo}
                purge={this.purge}
              />
          </div>
        </main>
      </div>
    );
  }
}

export default App;