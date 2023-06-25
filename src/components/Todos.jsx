import { useSelector } from 'react-redux';
import { Todo } from './Todo';



export const Todos = ({ handleDelete, handleChecked }) => {
    const todos = useSelector((state) => state.todos)

    return (
        <>
            {
             todos.map((item) => {
            return (
              <Todo 
                id={item.id}
                checking={item.checking}
                completed={item.completed}
                deleting={item.deleting}
                handleChecked={handleChecked}
                handleDelete={handleDelete}
                title={item.title}
              />
          )})
            }
        </>
    )
}