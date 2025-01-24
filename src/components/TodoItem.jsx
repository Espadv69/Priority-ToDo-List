const TodoItem = ({ task }) => {
  const priorityColors = {
    low: '#edf7ed',
    medium: '#fffbe6',
    high: '#ffe6e6',
  }

  return (
    <li
      className="li-todoItem"
      style={{ backgroundColor: priorityColors[task.priority] }}
    >
      <span>{task.task}</span>
      <span>{task.priority.toUpperCase()}</span>
    </li>
  )
}

export default TodoItem
