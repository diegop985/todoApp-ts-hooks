import { useReducer } from 'react';
import { TodoState } from '../interfaces/interfaces';
import { TodoContext } from './TodoContext';
import { todoReducer } from './todoReducer';

const INITIAL_STATE: TodoState = {
  todoCount: 4,
  todos: [
    {
      id: '1',
      desc: 'Todo 1',
      completed: false,
    },
    {
      id: '2',
      desc: 'Todo 2',
      completed: false,
    },
    {
      id: '3',
      desc: 'Todo 3',
      completed: false,
    },
    {
      id: '4',
      desc: 'Todo 4',
      completed: false,
    },
  ],
  completed: 0,
  pending: 0,
};

interface TodoProvideProps {
  children: JSX.Element | JSX.Element[];
}

export const TodoProvider = ( { children }: TodoProvideProps ) => {

  const [ todoState, dispatch ] = useReducer( todoReducer, INITIAL_STATE );

  const toggleTodo = ( id: string ) => {
    // console.log( { id } );
    dispatch( { type: 'toggleTodo', payload: { id } } );
  };

  return (
    
    <TodoContext.Provider value={
      { todoState, toggleTodo } 
    }>
      { children }
    </TodoContext.Provider>
  );
};
