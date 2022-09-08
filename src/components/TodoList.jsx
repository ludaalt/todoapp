import TodoItem from "./TodoItem";

import styled from "styled-components";

const Todos = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 1rem;
  width: 90%;
`;

const TodoList = ({ todos, onToggle }) => {
  return (
    <Todos>
      {todos &&
        todos.map(
          (todo, index) =>
            todo && (
              <TodoItem
                index={index}
                todo={todo}
                key={todo.id}
                onChangeDone={onToggle}
              />
            )
        )}
    </Todos>
  );
};

export default TodoList;
