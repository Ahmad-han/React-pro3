import { Todo } from './Todo';
import { useTypedSelector } from '../hooks/useTypedSelectot';

interface TodosProps {
  handleDelete: (a: number) => void
  handleChecked: (id: number, completed: boolean) => void
}



export const Todos: React.FC<TodosProps> = ({ handleDelete, handleChecked }) => {
    const todos = useTypedSelector((state) => state.todos.todos)
    const users = useTypedSelector((state) => state.users.users)

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