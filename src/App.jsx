import { useState } from 'react'

import TodoForm from './components/TodoForm'

const App = () => {
  const [tasks, setTasks] = useState([])

  const handleAddTask = (newTask) => {
    setTasks((prevTask) => [...prevTask, newTask])
  }
  return (
    <main>
      <h1>Todo List with Priority</h1>
      <TodoForm onAddTask={handleAddTask} />
      {/* Todo: Show tasksList */}
    </main>
  )
}

export default App
