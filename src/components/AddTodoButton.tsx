import { useContext } from 'react';

import Context from '../context';

import styled from 'styled-components';

const AddTodoButton = styled.button`
  display: inline-block;
  cursor: pointer;
  border: none;
  background: none;
  font-size: 2.5em;
  color: #69666c;
`;

const AddTodo = () => {
  const { addTodo } = useContext(Context);

  return (
    <AddTodoButton onClick={() => addTodo(true)} title="Add New Todo">
      {'U+002B'}
    </AddTodoButton>
  );
};

export default AddTodo;
