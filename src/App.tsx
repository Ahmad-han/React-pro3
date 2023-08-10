import React, { useEffect } from "react";
import { Todos } from "./components/Todos";
import { useTypedSelector } from "./hooks";
import { useActions } from "./hooks/useActions";


export const App:React.FC = () => {
  const loading: boolean = useTypedSelector((state) => state.loading)
  const loadingUsers: boolean = useTypedSelector((state) => state.loadingUsers)
  const {
    loadTodos,
    loadUsers, 
    removeTodo, 
    updateCheck
  } = useActions();

  

  useEffect(():void => {
    loadTodos()
    loadUsers()
  }, [])

const handleDelete = (id: number):void => {
  removeTodo(id)
}

const handleChecked = (id: number, completed: boolean):void => {
  updateCheck(id, completed)
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


