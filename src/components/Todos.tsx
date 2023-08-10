import { Todo } from './Todo';
import React from 'react';
import { useTypedSelector } from '../hooks';


interface TodosProps {
  handleDelete: (id: number) => void
  handleChecked: (id: number, completed: boolean) => void
}



export const Todos: React.FC<TodosProps> = ({ handleDelete, handleChecked }) => {
    const todos = useTypedSelector((state) => state.todos)
    const users = useTypedSelector((state) => state.users)

    return (
        <>
            {
             todos.map((item) => {
            return (
              <Todo 
                id={item.id}
                key={item.id}
                checking={item.checking}
                completed={item.completed}
                deleting={item.deleting}
                handleChecked={handleChecked}
                handleDelete={handleDelete}
                title={item.title}
                userId={item.userId}
                users={users}
              />
          )})
            }
        </>
    )
}