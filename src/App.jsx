import { useState } from 'react'

import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

const App = () => {
  const [tasks, setTasks] = useState([])

  const handleAddTask = (newTask) => {
    setTasks((prevTask) => [...prevTask, newTask])
  }

  const handleDeleteTask = (index) => {
    const filteredTasks = tasks.filter((_, i) => i !== index)
    setTasks(filteredTasks)
  }
  return (
    <main>
      <h1 className="h1-title">Todo List with Priority</h1>
      <TodoForm onAddTask={handleAddTask} />
      <TodoList tasks={tasks} onDeleteTask={handleDeleteTask} />
    </main>
  )
}

export default App
