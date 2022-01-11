import React from 'react';
import TodoItem from './TodoItem';

const TodoList = (props) => {
  const todos = props.todos.map(todo => {
  return (
    <TodoItem
      key={todo.id}
      todo={todo}
      checkTodo={props.checkTodo}
      deleteTodo={props.deleteTodo}
    />
  )
  });
  return (
    <div className="list-box">
        <ul>
          {props.todos.length ? todos : <li>Nothing to do!</li>}
        </ul>
        <button className="btn purge" onClick={props.purge}>Purge</button>
    </div>
  );
}

export default TodoList