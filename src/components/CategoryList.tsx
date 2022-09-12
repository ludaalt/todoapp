import CategoryItem from './CategoryItem';

import styled from 'styled-components';

const CategoryListWrap = styled.ul`
  margin-bottom: 40px;
  display: ${(props) => (props.isEdit ? 'flex' : 'block')};

  & li,
  & span {
    cursor: pointer;
  }
`;

const CategoryList = ({ isEdit }) => {
  const categories = ['work', 'study', 'entertainment', 'family'];

  return (
    <CategoryListWrap isEdit={isEdit}>
      {categories.map((item) => (
        <li key={item}>
          <CategoryItem
            item={item}
            // titleItem={titleItem}
            // activeItem={activeItem}
          />
        </li>
      ))}
    </CategoryListWrap>
  );
};

export default CategoryList;
