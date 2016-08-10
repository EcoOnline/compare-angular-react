import React from 'react'
import { toggleTodo } from '../store'

const Todo = ({ id, completed, text }) => {
  return (
    <li className='pure-menu-link' onClick={toggle} style={completedStyle(completed)}>
      {text}
    </li>
  )

  function toggle () {
    toggleTodo(id)
  }
}

function completedStyle (completed) {
  return { textDecoration: completed ? 'line-through' : 'none' }
}

export default Todo
