import { Dispatch } from "react"
import { TodoAction, TodoActionTypes } from "../../types"




export const loadTodos = () => {
    return (dispatch: Dispatch<TodoAction>):void => {
        dispatch({type: TodoActionTypes.FETCH_TODOS})

        fetch("https://jsonplaceholder.typicode.com/todos")
        .then((response) => response.json())
        .then((json) => {
            dispatch({
                type: TodoActionTypes.FETCH_TODO_SUCCESS,
                payload: json
            })
        })

    }

}


export const removeTodo = (id: number) => {
    return (dispatch: Dispatch<TodoAction>):void => {
        dispatch({type: TodoActionTypes.FETCH_DELETE, payload: id})

        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
            method: "DELETE"
        })
        .then((response) => response.json())
        .then((json) => {
            dispatch({
                type: TodoActionTypes.FETCH_DELETE_SUCCESS,
                payload: id
            })
        })
    }
}


export const updateCheck = (id: number, completed: boolean) => {
    return (dispatch: Dispatch<TodoAction>):void => {
        dispatch({type: TodoActionTypes.FETCH_CHECK, payload: id})

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
                type: TodoActionTypes.FETCH_CHECK_SUCCESS,
                payload: id,
            })
        })


    }
}

export const loadUsers = () => {
    return (dispatch: Dispatch<TodoAction>):void => {
        dispatch({type: TodoActionTypes.FETCH_USER})

        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((json) => {
            dispatch({
                type: TodoActionTypes.FETCH_USER_SUCCESS,
                payload: json
            })
        })
    }
}