'use strict';

import React from 'react';
import ToDo from './ToDoListItem';

class ListToDo extends React.Component {
  render() {
    return (
      <div>
        {
          this.props.todos.map(todo =>
            <div key={todo._id}>
              <ToDo todo={todo}/>
            </div>
          )
        }
      </div>
    );
  }
}

export default ListToDo;