import { useState } from 'react';
import styled from 'styled-components';
import CategoryList from './CategoryList';

const AsideContainer = styled.aside`
  max-width: 20%;
  margin-right: 80px;

  & li:not(:last-child) {
    margin-bottom: 25px;
  }
`;

const Form = styled.form`
  & input {
    margin-right: 10px;
  }
`;

const Aside = ({ updateTasks }) => {
  const [checked, setChecked] = useState(false);

  return (
    <AsideContainer>
      <CategoryList />

      <Form>
        <input
          onClick={() => {
            updateTasks(checked);
          }}
          onChange={() => setChecked(!checked)}
          type="checkbox"
          id="checkbox"
          checked={checked}
        />
        <label htmlFor="checkbox">Hide Done Tasks</label>
      </Form>
    </AsideContainer>
  );
};

export default Aside;
