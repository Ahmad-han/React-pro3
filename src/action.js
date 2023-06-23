export const loadTodos = () => {
    return (dispatch) => {
        dispatch({type: "load/todos/start"})

        fetch("https://jsonplaceholder.typicode.com/todos/?_limit=20")
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

        fetch(`https://jsonplaceholder.typicode.com/todos/${id}/?_limit=20`, {
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
        dispatch({type: "check/load/start"})

        fetch(`https://jsonplaceholder.typicode.com/todos/${id}/?_limit=20`, {
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
                payload: id
            })
        })


    }
}