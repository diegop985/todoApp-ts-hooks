import { useReducer } from 'react';
import { TodoState } from '../interfaces/interfaces';
import { TodoContext } from './TodoContext';
import { todoReducer } from './todoReducer';

const INITIAL_STATE: TodoState = {
  
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
  pending: 4,
  todoCount: 4,

};

// eslint-disable-next-line @typescript-eslint/no-unused-vars, prefer-const

interface TodoProvideProps {
  children: JSX.Element | JSX.Element[];
}

export const TodoProvider = ( { children }: TodoProvideProps ) => {

  const [ todoState, dispatch ] = useReducer( todoReducer, INITIAL_STATE );
  
  console.log( todoState.todoCount );

  const setTodoCount = () => {
    dispatch( { type: 'setTodoCount' } );
  };

  const toggleTodo = ( id: string ) => {
    dispatch( { type: 'toggleTodo', payload: { id } } );
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const addTodo = ( desc: string ): any => {
    dispatch( { type: 'addTodo', payload: { 
      id: ( todoState.todoCount + 1 ).toString(),
      desc: desc,
      completed: false,
    } } );
  };
 
  return (
    
    <TodoContext.Provider value={
      { todoState, toggleTodo, addTodo, setTodoCount } 
    }>
      { children }
    </TodoContext.Provider>
  );
};
