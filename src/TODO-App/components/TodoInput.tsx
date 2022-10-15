import { useTodos } from '../hooks/useTodos';

export const TodoInput = () => {
  
  const { addTodo, setTodoCount } = useTodos();

  const handleAdd = ( e: any ) => {
    
    if ( e.key === 'Enter' ) {
      addTodo( e.target.value );
      e.target.value = ' ';
      setTodoCount();
    }

  };

  return (
    <>
      <input onKeyDown={ handleAdd } type="text" />
    </>
  );
};
