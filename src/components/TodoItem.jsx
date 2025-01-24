const TodoItem = ({ task, onDeleteTask }) => {
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
      <button type="button" onClick={onDeleteTask}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
