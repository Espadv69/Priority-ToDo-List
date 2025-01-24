import '../css/TodoItem.css'

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
      <span className="task-todoItem">{task.task}</span>
      <span className="priority-todoItem">
        Priority: {task.priority.toUpperCase()}
      </span>
      <button className="button-todoItem" type="button" onClick={onDeleteTask}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
