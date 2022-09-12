import { useState } from 'react';
import CategoryList from './CategoryList';

import styled from 'styled-components';

const ModalWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.3);
`;

const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 800px;
  max-height: 80vh;
  background-color: #fff;
  border-radius: 15px;
  padding: 2rem;
`;

const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 45px;

  & label {
    display: block;
    font-size: 1.17em;
    margin-block-start: 1em;
    margin-block-end: 1em;
    font-weight: bold;
  }

  & input,
  & textarea {
    width: 100%;
    padding: 10px;
    background-color: #ebe9e4;
    border-radius: 5px;
    border: none;

    font-weight: bold;
    font-family: 'Adobe';
    font-size: 15px;
    color: gray;
  }

  & input::placeholder {
    font-weight: bold;
    font-family: 'Adobe';
    font-size: 15px;
    color: gray;
  }

  & textarea {
    resize: none;
    color: gray;
    line-height: 25px;
  }
`;

const ModalControl = styled.div`
  order: -1;
  margin-bottom: 5px;
  display: flex;
  justify-content: space-between;

  & ul {
    display: flex;
    margin-top: 15px;

    & li:not(:last-child) {
      margin-right: 50px;
    }
  }

  & button {
    display: inline-block;
    cursor: pointer;
    border: none;
    background: none;
    font-family: inherit;
    font-size: 16px;
    font-weight: bold;
    border-radius: 5px;
  }

  &.modalButtonCancel {
    padding: 8px 40px 8px 0;
  }

  &.modalButtonAdd {
    padding: 8px 40px;
    background-color: #69666c;
    color: #fff;
  }
`;

const AddTodoModal = ({ setActive, onCreateTask, isEdit, onEditTask, currentTodo }) => {
  const [taskTitle, setTaskTitle] = useState(isEdit ? currentTodo.title : '');
  const [taskDescription, setTaskDescription] = useState(
    isEdit ? currentTodo.description.toString().replace(/\s+/g, ' ').trim() : '',
  );

  const submitHandler = (e) => {
    e.preventDefault();

    if (taskTitle.trim()) {
      if (isEdit) {
        onEditTask(taskTitle, taskDescription);
      } else {
        onCreateTask(taskTitle, taskDescription);
        setTaskTitle('');
      }
      setActive(false);
    }
  };

  const handleChangeInput = (e) => {
    setTaskTitle(e.target.value);
  };

  const handleChangeArea = (e) => {
    setTaskDescription(e.target.value);
  };

  return (
    <ModalWrap onClick={() => setActive(false)}>
      <ModalBody onClick={(e) => e.stopPropagation()}>
        <ModalForm onSubmit={submitHandler}>
          <label htmlFor="todoTitle">Title</label>
          <input
            id="todoTitle"
            type="text"
            placeholder="add a title..."
            value={taskTitle}
            onChange={handleChangeInput}
          />

          <label htmlFor="todoDescription">Description</label>
          <textarea
            id="todoDescription"
            rows="5"
            placeholder="add a description"
            value={taskDescription}
            onChange={handleChangeArea}
          ></textarea>

          <ModalControl>
            <button type="button" className="modalButtonCancel" onClick={() => setActive(false)}>
              Cancel
            </button>
            <button type="submit" className="modalButtonAdd">
              {isEdit ? 'Edit' : 'Add'}
            </button>
          </ModalControl>
        </ModalForm>

        <div>
          <h3>Tags</h3>
          <CategoryList isEdit={isEdit} titleItem={true} activeItem={true} />
        </div>
      </ModalBody>
    </ModalWrap>
  );
};

export default AddTodoModal;
