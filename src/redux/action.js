export const loadTodos = () => {
    return (dispatch) => {
        dispatch({type: "load/todos/start"})

        fetch("https://jsonplaceholder.typicode.com/todos")
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
        dispatch({type: "delete/todo/start", payload: id})

        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
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


export const updateCheck = (id, completed) => {
    return (dispatch) => {
        dispatch({type: "check/load/start", payload: id})

        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
            method: "PATCH",
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({
                "completed": !completed
            })
        })
        .then((response) => response.json())
        .then((json) => {
            dispatch({
                type: "check/load/success",
                payload: id,
            })
        })


    }
}

export const loadUsers = () => {
    return (dispatch) => {
        dispatch({type: "load/users/start"})

        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((json) => {
            dispatch({
                type: "load/users/fulfilled",
                payload: json
            })
        })
    }
}