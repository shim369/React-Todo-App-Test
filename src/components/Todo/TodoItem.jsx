import React from 'react';

const TodoItem = (props) => {
  if(props.todo.link){
      return (
        <li key={props.todo.id}>
          <label>
            <input type="checkbox" checked={props.todo.isDone} onChange={() => props.checkTodo(props.todo)}/>
            <span className={props.todo.isDone ? 'done' : ''}>
              <a href={props.todo.link} target="_blank" rel="noopener noreferrer">{props.todo.title}</a>
            </span>
          </label>
          <span className="cmd material-icons" onClick={() => props.deleteTodo(props.todo)}>delete_forever</span>
        </li>
      )
  } else {
      return (
        <li key={props.todo.id}>
          <label>
            <input type="checkbox" checked={props.todo.isDone} onChange={() => props.checkTodo(props.todo)}/>
            <span className={props.todo.isDone ? 'done' : ''}>
              {props.todo.title}
            </span>
          </label>
          <span className="cmd material-icons" onClick={() => props.deleteTodo(props.todo)}>delete_forever</span>
        </li>
      )
  }
}

export default TodoItem