// simport { TodoItem } from './TodoItem';

import { useTodos } from '../hooks/useTodos';
import { TodoItem } from './TodoItem';

export const TodoList = () => {

  const { todos, completedTodos, pendingTodos, todoCount } = useTodos(); 

  return (
    <div>
      
      <ul>
        {
          todos.map( todo => <TodoItem key={ todo.id } todo={ todo } /> )
        }
      </ul>

      <p>Completed: { completedTodos }</p>
      <p>Pending: { pendingTodos }</p>
      <p>Total: { todoCount }</p>
      
    </div>
  );
};
