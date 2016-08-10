import { createStore } from 'redux'

let nextTodoId = 0

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'TOGGLE_TODO':
      return state.map(t => {
        if (t.id !== action.id) return t

        return Object.assign({}, t, {
          completed: !t.completed
        })
      })
    default:
      return state
  }
}

const store = createStore(todos)

export const addTodo = text => {
  store.dispatch({
    type: 'ADD_TODO',
    id: nextTodoId++,
    text: text
  })
}

export const toggleTodo = id => {
  store.dispatch({
    type: 'TOGGLE_TODO',
    id
  })
}

export default store
