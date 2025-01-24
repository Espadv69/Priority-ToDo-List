import { useState } from 'react'

import TodoForm from './components/TodoForm'

const App = () => {
  return (
    <main>
      <h1>Todo List with Priority</h1>
      <TodoForm />
      {/* Todo: Show tasksList */}
    </main>
  )
}

export default App
