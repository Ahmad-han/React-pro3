import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Todos } from "./components/Todos";
import { loadTodos, removeTodo, updateCheck } from "./redux/TodosSlice";
import { loadUsers } from "./redux/UsersSlice";


export const App = () => {
  const loading = useSelector((state) => state.todos.loading)
  const loadingUsers = useSelector((state) => state.users.loadUsers)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTodos())
    dispatch(loadUsers())
  }, [])

const handleDelete = (id) => {
  dispatch(removeTodo(id))
}

const handleChecked = (id, completed) => {
  dispatch(updateCheck({id: id, completed: completed}))
}


  return (
    <div className="App">
      <h1>Список дел:</h1>
      <ul>
        
        { 
        (loading || loadingUsers) ? <h3>"Идет загрузка..."</h3> :
         <Todos 
         handleDelete = {handleDelete}
         handleChecked = {handleChecked}
         />
        }
        
      </ul>
    </div>
  );
}


