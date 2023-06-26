

export const Button = ({ handleDelete, deleting, id }) => {

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