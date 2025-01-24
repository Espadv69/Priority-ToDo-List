import { useState } from 'react'

const TodoForm = ({ onAddTask }) => {
  const [task, setTask] = useState('')
  const [priority, setPriority] = useState('low')

  return (
    <form>
      <label>
        Task:
        <input type="text" />
      </label>

      <label>
        Priority:
        <input type="text" />
      </label>

      <button>Add Task</button>
    </form>
  )
}
