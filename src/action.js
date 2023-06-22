export const loadTodos = () => {
    return (dispatch) => {
        dispatch({type: "load/todos/start"})

        fetch("https://jsonplaceholder.typicode.com/photos/?_limit=20")
        .then((response) => response.json())
        .then((json) => {
            dispatch({
                type: "load/todos/fulfilled",
                payload: json
            })
        })

    }

}


export const removeTodo = (id) => {
    return (dispatch) => {
        dispatch({type: "delete/todo/start"})

        fetch(`https://jsonplaceholder.typicode.com/photos/${id}?/_limit=20`, {
            method: "DELETE"
        })
        .then((response) => response.json())
        .then((json) => {
            dispatch({
                type: "delete/todo/fulfilled",
                payload: id
            })
        })
    }
}