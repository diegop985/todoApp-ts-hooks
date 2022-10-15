import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

export const useTodos = () => {

  const { todoState, toggleTodo, addTodo, setTodoCount } = useContext( TodoContext );
  const { todos, completed, pending, todoCount } = todoState;

  return {
    todos: todos, 
    completedTodos: completed,
    pendingTodos: pending,
    toggleTodo,
    addTodo,
    todoCount,
    setTodoCount,
    todoState,
  };
};
