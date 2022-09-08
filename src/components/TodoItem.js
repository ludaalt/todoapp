import { useState, useContext } from "react";
import styled from "styled-components";

import Context from "../context";
import CategoryItem from "./CategoryItem";
import TodoItemControlButton from "./TodoItemControlButton";

const Todo = styled.div`
  cursor: pointer;
  width: 49%;
  background-color: #fff9de;
  border-radius: 15px;
  padding: 20px;
  font-family: "AdobeBold";
  display: ${(props) => (props.todo && !props.todo.isShown ? "none" : "block")};

  &:hover {
    background-color: #fffdd0;
  }

  & p {
    margin: 15px 0;
    font-size: 15px;
    line-height: 22px;
    letter-spacing: 0.5px;

    text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
  }
`;

const TodoMainHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TodoHeader = styled.h2`
  font-size: 20px;
  position: relative;

  &::after {
    content: " ";
    position: absolute;
    top: calc(50% - 1px);
    left: 0;
    width: ${(props) => (props.completed ? "100%" : 0)};
    background-color: #69666c;
    height: 2px;
    transition: all 0.5s cubic-bezier(0.02, 0.01, 0.47, 1);
  }
`;

const ControlPanel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & ul {
    display: flex;
  }
`;

const TodoItem = ({ todo }) => {
  //const controlButton = useRef();
  const { editTodo } = useContext(Context);

  const [completed, setCompleted] = useState(todo.completed);

  return (
    todo && (
      <Todo completed={completed}>
        <TodoMainHeader>
          <TodoHeader completed={completed}>{todo.title}</TodoHeader>

          <TodoItemControlButton editTodo={editTodo} todo={todo} />
        </TodoMainHeader>
        <p>{todo.description}</p>

        <ControlPanel>
          <ul>
            {todo.categories &&
              todo.categories.map((item, index) => (
                <li key={index} title={item}>
                  <CategoryItem item={item} />
                </li>
              ))}
          </ul>

          <form>
            <input
              type="checkbox"
              id={todo.id}
              onChange={() => setCompleted(!completed)}
            />
            <label htmlFor={todo.id}> Done</label>
          </form>
        </ControlPanel>
      </Todo>
    )
  );
};

export default TodoItem;
