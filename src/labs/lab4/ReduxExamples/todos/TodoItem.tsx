import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";

export default function TodoItem( {todo}: {todo: any}) {
    // const { todo } = useSelector((state: any) => state.todosReducer);
    const dispatch = useDispatch();
    return (
        <li key={todo.id} className="list-group-item">

            <button onClick={() => dispatch(deleteTodo(todo.id))}
            id="wd-delete-todo-click" className="btn btn-danger float-end"> Delete </button>

            <button onClick={() => dispatch(setTodo(todo))}
            id="wd-set-todo-click" className="btn btn-primary me-2 float-end"> Edit </button>

            {todo.title}
        </li>
    );
}