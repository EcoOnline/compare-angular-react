import React from 'react'
import {connect} from 'react-redux'
import Todo from './Todo'

let TodoList = ({ todos, onTodoClick }) => {
  return (
    <ul className='pure-menu-list'>
      { todos.map(createTodo) }
    </ul>
  )

  function createTodo (todo) {
    return <Todo key={todo.id} {...todo} />
  }
}
TodoList = connect(state => ({ todos: state }))(TodoList)

export default TodoList
