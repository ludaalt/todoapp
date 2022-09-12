import AddTodoButton from './AddTodoButton';
import styled from 'styled-components';

const Head = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
`;

const Header = () => {
  return (
    <Head>
      <h1>todo</h1>
      <AddTodoButton />
    </Head>
  );
};

export default Header;
