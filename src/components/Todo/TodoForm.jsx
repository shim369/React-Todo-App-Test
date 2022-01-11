import React from 'react';

const TodoForm = (props) => {
  return (
        <form onSubmit={props.addTodo}>
          <input type="text" placeholder="TITLE" value={props.item} onChange={props.updateItem} />
          <input type="text" placeholder="URL" value={props.link} onChange={props.updateLink} />
          <input type="submit" value="Add" className="btn add" />
        </form>
  );
}

export default TodoForm