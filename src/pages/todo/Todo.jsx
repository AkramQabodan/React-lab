import { useSelector, useDispatch } from "react-redux";
import { addTodoRedux } from "../../redux/oldReduxConfig";
import { deleteTodoRedux } from "../../redux/oldReduxConfig";
import TodoForm from "../../Components/todo/TodoForm";
import TodoList from "../../Components/todo/TodoList";
import "./Todo.css";
function Todo() {
  const dispatch = useDispatch();
  const store = useSelector((state) => state.todos);

  const addTodo = (task) => {
    dispatch(addTodoRedux(task));
  };

  const deleteTodo = (index) => {
    dispatch(deleteTodoRedux(index));
  };
  console.log(store);
  return (
    <div className="text-center py-2 todo-wrapper container">
      <TodoForm addTodo={addTodo} />
      <TodoList todos={store} deleteTodo={deleteTodo} />
    </div>
  );
}

export default Todo;
