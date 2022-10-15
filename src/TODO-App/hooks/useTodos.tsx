import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

export const useTodos = () => {

  const { todoState, toggleTodo } = useContext( TodoContext );
  const { todos, completed, pending } = todoState;

  console.log( completed + ' ' + pending );

  return {
    todos: todos, 
    completedTodos: completed,
    pendingTodos: pending,
    toggleTodo,
  };
};
