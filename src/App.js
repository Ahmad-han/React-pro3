import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadTodos, removeTodo } from "./action";

export const App = () => {
  const todos = useSelector((state) => state.todos)
  const loading = useSelector((state) => state.loading)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTodos())
  }, [])

const handleDelete = (id) => {
  dispatch(removeTodo(id))
}

  return (
    <div className="App">
      <h1>Список дел:</h1>
      <ul>
        
        { loading ? <h3>"Идет загрузка..."</h3> :
          todos.map((item) => {
            return (
              
            <li>
              <input type="checkbox"/>
              <div className="todo">{item.title}</div>
              <button onClick={() => handleDelete(item.id)}>УДАЛИТЬ</button>
              </li>
          )})
        }
        
      </ul>
    </div>
  );
}


