import React from 'react'
import {addTodo} from '../store'

let AddTodo = ({ dispatch }) => {
  let input

  return (
    <form className='pure-form' onSubmit={add}>
      <fieldset>
        <input ref={node => { input = node }} />
        <button className='pure-button' type='submit'>
            Add Todo
        </button>
      </fieldset>
    </form>
  )

  function add (e) {
    e.preventDefault()
    if (!input.value.trim()) return
    addTodo(input.value)
    input.value = ''
  }
}

export default AddTodo
