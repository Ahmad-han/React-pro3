import React, { useEffect } from "react";
import { Todos } from "./components/Todos";
import { loadTodos, removeTodo, updateCheck } from "./redux/TodosSlice";
import { loadUsers } from "./redux/UsersSlice";
import { useTypedDispatch, useTypedSelector } from "./hooks/useTypedSelectot";


export const App: React.FC = () => {
  const loading = useTypedSelector((state) => state.todos.loading)
  const dispatch = useTypedDispatch();

  useEffect(() => {
    dispatch(loadTodos())
    dispatch(loadUsers())
  }, [])

const handleDelete = (id: number): void => {
  dispatch(removeTodo({ id }))
}

const handleChecked = (id: number, completed: boolean): void => {
  dispatch(updateCheck({id, completed}))
}

  return ( 
    <div className="App">
      <h1>Список дел:</h1>
      <ul>
        { 
        loading ? <h3>"Идет загрузка..."</h3> :
         <Todos 
         handleDelete = {handleDelete}
         handleChecked = {handleChecked}
         />
        }  
      </ul>
    </div> 
  );
}


