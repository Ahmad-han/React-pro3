import { Button } from './Button';
import { Checking } from './Checking';



export const Todo = ({ id, checking, completed, deleting, handleChecked, handleDelete, title, userId, users }) => {

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