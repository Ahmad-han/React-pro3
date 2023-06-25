import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadTodos, removeTodo, updateCheck } from "./redux/action";
import { Todos } from "./components/Todos";


export const App = () => {
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
         <Todos 
         handleDelete = {handleDelete}
         handleChecked = {handleChecked}
         />
        }
        
      </ul>
    </div>
  );
}


