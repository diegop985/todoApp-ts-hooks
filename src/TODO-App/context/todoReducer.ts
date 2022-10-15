import { Todo, TodoState } from '../interfaces/interfaces';

type TodoAction =
  | { type: 'addTodo', payload: Todo }
  | { type: 'toggleTodo', payload: {id: string} }

export const todoReducer = ( state: TodoState, action: TodoAction ): TodoState => {
  
  switch ( action.type ) {

    case 'addTodo':
      return {
        ...state,
        todos: [ ...state.todos, action.payload ],
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
