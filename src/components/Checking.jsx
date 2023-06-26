import ReactLoading from 'react-loading';


export const Checking = ({ completed, checking, handleChecked, id }) => {
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