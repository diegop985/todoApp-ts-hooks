import { TodoState } from '../interfaces/interfaces';

type TodoAction =
  | { type: 'addTodo', payload: {
    id: string
    desc: string
    completed: boolean
  } }
  | { type: 'toggleTodo', payload: {id: string} }
  | { type: 'setTodoCount' }

export const todoReducer = ( state: TodoState, action: TodoAction ): TodoState => {

  switch ( action.type ) {

    case 'addTodo':
      return {
        ...state,
        todos: [ ...state.todos, action.payload ],
      };

    case 'setTodoCount':
      return {
        ...state,
        todoCount: state.todos.length,
        pending: state.todos.length- state.completed,
      };

    case 'toggleTodo':
      return {
        ...state,
        todos: state.todos.map( ( { ...todo } ) => {
          if ( todo.id === action.payload.id ) {
            todo.completed = !todo.completed;

            if ( todo.completed ) {
              state.completed++;
              state.pending--;
            } else {
              state.pending++;
              state.completed--;
            }
          }
          return todo;
        } ),
        
      };

    default:
      return state;
  }
};
