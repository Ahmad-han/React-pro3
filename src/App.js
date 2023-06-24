import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadTodos, removeTodo, updateCheck } from "./action";
import ReactLoading from 'react-loading';

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

const handleChecked = (id, completed) => {
  dispatch(updateCheck(id))
}


  return (
    <div className="App">
      <h1>Список дел:</h1>
      <ul>
        
        { loading ? <h3>"Идет загрузка..."</h3> :
          todos.map((item) => {
            return (
              
            <li>
             {
              item.checking === true ? (
                <ReactLoading type="spin" color="#3c63ff" height={'25px'} width={'25px'} />
              ) : (
                <input 
                type="checkbox"
                checked={item.completed}
                onChange={() => handleChecked(item.id, item.completed)}
                />
              )
             }
              <div className="todo">{item.title}</div>
              <button 
              onClick={() => handleDelete(item.id)}
              disabled={item.deleting}
              >УДАЛИТЬ</button>
              </li>
          )})
        }
        
      </ul>
    </div>
  );
}


