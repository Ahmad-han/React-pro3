import React from "react"


interface ButtonProps {
    handleDelete: (id: number) => void
    deleting: boolean
    id: number
}


export const Button: React.FC<ButtonProps> = ({ handleDelete, deleting, id }) => {

    return (
        <div className="button">
        <button 
              onClick={() => handleDelete(id)}
              disabled={deleting}
         >
                УДАЛИТЬ
        </button>
        </div>
    )
}