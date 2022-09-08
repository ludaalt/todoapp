import { useState, useContext, useEffect, useRef } from "react";
import Context from "../../context";

import CategoryItem from "../CategoryItem/CategoryItem";

import styled, { keyframes } from "styled-components";

const doneTask = keyframes`
  0% {
    transform-origin: 0% 50%;
    transform: scaleX(0);
  }
  100% {
    transform-origin: 0% 50%;
    transform: scaleX(1);
  }
`;

const Todo = styled.div`
  width: 49%;
  background-color: #fff9de;
  border-radius: 15px;
  padding: 20px;
  font-family: "AdobeBold";
  display: ${(props) => (props.todo && !props.todo.isShown ? "none" : "block")};

  & p {
    margin: 15px 0;
    font-size: 15px;
    line-height: 22px;
    letter-spacing: 0.5px;

    text-decoration: ${(props) =>
      props.todo && props.todo.completed ? "line-through" : "none"};
  }
`;

const TodoMainHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TodoHeader = styled.h2`
  font-size: 20px;

  position: ${(props) =>
    props.todo && props.todo.completed ? "relative" : "static"};

  &::after {
    content: " ";
    position: absolute;
    top: calc(50% - 1px);
    left: 0;
    width: 100%;
    background-color: #69666c;
    height: 2px;
    animation: ${doneTask} 0.75s ease-in-out forwards;
  }
`;

const ControlButtonWrap = styled.div`
  position: relative;
`;

const ControlButton = styled.button`
  display: inline-block;
  padding: 20px 15px 5px 15px;
  border: none;
  background: none;
  cursor: pointer;
  color: inherit;

  &::after {
    content: "\2809";
    font-size: 30px;
    line-height: 20px;
  }
`;

const ControlButtonContent = styled.div`
  position: absolute;
  top: 30px;
  left: -110px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 0px 3px 1px #f2f6f9;
  color: #69666c;

  & button {
    border: none;
    background: none;
    cursor: pointer;
    padding: 12px 100px 12px 15px;
    color: #69666c;
    font-family: "Adobe";
    font-weight: bold;

    &:first-child {
      border-bottom: 1px solid #f2f6f9;

      &::after {
        content: "...";
      }
    }
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

const TodoItem = ({ todo, onChangeDone }) => {
  const [isVisibleControls, setVisibleControls] = useState(false);

  const controlButton = useRef();
  const { editTodo, currentTodo = todo } = useContext(Context);

  useEffect(() => {
    document.onclick = function (e) {
      if (e.target !== this.controlButton && isVisibleControls) {
        setVisibleControls(false);
      }
    };
  });

  return (
    todo && (
      <Todo>
        <TodoMainHeader>
          <TodoHeader>{todo.title}</TodoHeader>

          <ControlButtonWrap>
            <ControlButton
              onClick={() => setVisibleControls(!isVisibleControls)}
              ref={controlButton}
            ></ControlButton>
            {isVisibleControls && (
              <ControlButtonContent>
                <button onClick={() => editTodo(true, todo.id)}>Edit</button>
                <button>Delete</button>
              </ControlButtonContent>
            )}
          </ControlButtonWrap>
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
              checked={todo.completed}
              onChange={() => onChangeDone(todo.id)}
            />
            <label htmlFor={todo.id}>Done</label>
          </form>
        </ControlPanel>
      </Todo>
    )
  );
};

export default TodoItem;
