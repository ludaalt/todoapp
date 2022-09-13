import styled from 'styled-components';

import Header from './components/Header';
import Aside from './components/Aside';
import TodoList from './components/TodoList';
import AddTodoModal from './components/AddTodoModal';
import './App.css';

const AppWrap = styled.div`
  font-family: 'Adobe';
  color: #69666c;
  padding: 4rem;
`;

const Main = styled.div`
  display: flex;
  justify-content: space-between;
`;

function App() {
  return (
    <AppWrap>
      <Header />
      <Main>
        <Aside />
        <TodoList />
        <AddTodoModal mode />
      </Main>
    </AppWrap>
  );
}

export default App;
