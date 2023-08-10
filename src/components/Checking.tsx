import React from 'react';
import ReactLoading from 'react-loading';


interface CheckingProps {
  completed: boolean
  checking: boolean
  handleChecked: (id: number, completed: boolean) => void
  id: number
}



export const Checking: React.FC<CheckingProps> = ({ completed, checking, handleChecked, id }) => {
    return (
        <>
        {
            checking === true ? (
              <ReactLoading type="spin" color="#3c63ff" height={'25px'} width={'25px'}/>
            ) : (  
              <input 
              type="checkbox"
              checked={completed}
              onChange={() => handleChecked(id, completed)}
              />
            )
           }
         </>
    )
}