import { useSelector } from 'react-redux';
import { Todo } from './Todo';



export const Todos = ({ handleDelete, handleChecked }) => {
    const todos = useSelector((state) => state.todos)
    const users = useSelector((state) => state.users)

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