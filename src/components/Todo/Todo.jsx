import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const Todo = () => {
  return (
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
  )
}

export default Todo