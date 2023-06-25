import { Button } from './Button';
import { Checking } from './Checking';



export const Todo = ({ id, checking, completed, deleting, handleChecked, handleDelete, title }) => {

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
              </div>
              <Button 
                handleDelete={handleDelete}
                deleting={deleting}
                id={id}
            />
              </li>
       
    )
}