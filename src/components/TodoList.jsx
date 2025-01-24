import TodoItem from './TodoItem'

import '../css/TodoList.css'

const TodoList = ({ tasks, onDeleteTask }) => {
  if (tasks.length === 0) {
    return <p className="p-todoList">No tasks added yet!</p>
  }

  return (
    <ul className="ul-todoList">
      {tasks.map((task, index) => (
        <TodoItem
          key={index}
          task={task}
          onDeleteTask={() => onDeleteTask(index)}
        />
      ))}
    </ul>
  )
}

export default TodoList
