import { TodoInput } from './components/TodoInput';
import { TodoList } from './components/TodoList';
import { TodoProvider } from './context/TodoProvider';

export const Todo = () => {
  return (

    <TodoProvider>

      <h1>TODOs </h1>
      <TodoInput />
      <TodoList/>
    
    </TodoProvider>
    
  );
};
