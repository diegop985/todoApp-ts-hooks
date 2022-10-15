import { createContext } from 'react';
import { Todo, TodoState } from '../interfaces/interfaces';

export type TodoContextProps = {
  todoState: TodoState;
  toggleTodo: ( id: string )=> void 
  addTodo: ( desc: string )=> Todo 
  setTodoCount: ()=> void
}

export const TodoContext = createContext<TodoContextProps>( {} as TodoContextProps );