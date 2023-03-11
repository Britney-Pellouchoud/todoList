import React from 'react'
import Todo from './Todo'

export default function TodoList( { todos, toggleTodo }) {
  return (
    todos.map(todo => {
        // key lets react only re render whatever in the array changed
        return <Todo key={todo.id} toggleTodo={toggleTodo} todo={todo} />
    })
  )
}
