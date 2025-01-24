import TodoItem from './TodoItem'

const TodoList = ({ tasks }) => {
  if (tasks.length === 0) {
    return <p className="p-todoList">No tasks added yet!</p>
  }

  return (
    <ul className="ul-todoList">
      {tasks.map((task, index) => (
        <TodoItem key={index} task={task} />
      ))}
    </ul>
  )
}

export default TodoList
