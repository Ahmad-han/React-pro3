
export interface initialStateType {
    todos: any[]
    loading: boolean
    users: any[]
    loadingUsers: boolean
    deleting?: boolean
    checking?: boolean
    completed?: boolean
  }
  

  export enum TodoActionTypes {
    FETCH_TODOS = "FETCH_TODOS",
    FETCH_TODO_SUCCESS = "FETCH_TODO_SUCCESS",
    FETCH_DELETE = "FETCH_DELETE",
    FETCH_DELETE_SUCCESS = "FETCH_DELETE_SUCCESS",
    FETCH_CHECK = "FETCH_CHECK",
    FETCH_CHECK_SUCCESS = "FETCH_CHECK_SUCCESS",
    FETCH_USER = "FETCH_USER",
    FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS"
  }

  interface FetchTodoAction {
    type: TodoActionTypes.FETCH_TODOS;
  }

  interface FetchTodoSuccessAction {
    type: TodoActionTypes.FETCH_TODO_SUCCESS;
    payload: any[];
  }

  interface FetchDeleteAction {
    type: TodoActionTypes.FETCH_DELETE;
    payload: number;
  }

  interface FetchDeleteSuccessAction {
    type: TodoActionTypes.FETCH_DELETE_SUCCESS;
    payload: number;
  }

  interface FetchCheckAction {
    type: TodoActionTypes.FETCH_CHECK;
    payload: number;
  }

  interface FetchCheckSuccessAction {
    type: TodoActionTypes.FETCH_CHECK_SUCCESS;
    payload: number;
  }

  interface FetchUserAction {
    type: TodoActionTypes.FETCH_USER;
  }

  interface FetchUserSuccessAction {
    type: TodoActionTypes.FETCH_USER_SUCCESS;
    payload: any[];
  }

  export type TodoAction = 
    FetchTodoAction
    | FetchTodoSuccessAction
    | FetchDeleteAction
    | FetchDeleteSuccessAction
    | FetchCheckAction
    | FetchCheckSuccessAction
    | FetchUserAction
    | FetchUserSuccessAction