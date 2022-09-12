import { useState, useEffect } from 'react';
import styled from 'styled-components';

const ControlButtonWrap = styled.div`
  position: relative;
`;

const ControlButton = styled.button`
  /* padding: 20px;
  cursor: pointer;
  font-size: 30px;

  border: none;
  background: none;
  font-size: 30px;
  line-height: 20px;
  border: 3px solid green; */
  display: inline-block;
  padding: 20px 15px 5px 15px;
  border: none;
  background: none;
  cursor: pointer;
  color: inherit;
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
    font-family: 'Adobe';
    font-weight: bold;

    &:first-child {
      border-bottom: 2px solid #f5f5f5;

      &::after {
        content: '...';
      }
    }
  }
`;

const TodoItemControlButton = ({ editTodo, todo }) => {
  const [isVisibleControls, setVisibleControls] = useState(false);

  useEffect(() => {
    document.onclick = function (e) {
      if (e.target !== this.controlButton && isVisibleControls) {
        setVisibleControls(false);
      }
    };
  });

  return (
    <ControlButtonWrap>
      <ControlButton onClick={() => setVisibleControls(!isVisibleControls)}>{'\u2026'}</ControlButton>
      {isVisibleControls && (
        <ControlButtonContent>
          <button onClick={() => editTodo(true, todo.id)}>Edit</button>
          <button>Delete</button>
        </ControlButtonContent>
      )}
    </ControlButtonWrap>
  );
};

export default TodoItemControlButton;
