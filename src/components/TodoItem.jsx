const TodoItem = ({ task, onDeleteTask }) => {
  const priorityColors = {
    low: '#edf7ed',
    medium: '#fffbe6',
    high: '#ffe6e6',
  }

  const handleDeleteTask = () => {
    onDeleteTask(task)
  }

  return (
    <li
      className="li-todoItem"
      style={{ backgroundColor: priorityColors[task.priority] }}
    >
      <span>{task.task}</span>
      <span>{task.priority.toUpperCase()}</span>
      <button type="button" onClick={handleDeleteTask}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
