import { Button } from './Button';
import { Checking } from './Checking';

interface TodoProps {
  id: number
  checking: boolean
  completed: boolean
  deleting: boolean
  handleChecked: (id: number, completed: boolean) => void
  handleDelete: (id: number) => void
  title: string
  userId: number
  users: any[]
}



export const Todo: React.FC<TodoProps> = ({ id, checking, completed, deleting, handleChecked, handleDelete, title, userId, users }) => {

const user = users.find((u) => u.id === userId)


    return (
        
          <li>
             <Checking 
                completed={completed}
                checking={checking}
                handleChecked={handleChecked}
                id={id}
             />
              <div className="todo">
                {title}
                <br />
                <b>(email: {user.email})</b>
              </div>
              <Button 
                handleDelete={handleDelete}
                deleting={deleting}
                id={id}
            />
              </li>
       
    )
}