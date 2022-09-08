import CategoryItem from "../CategoryItem/CategoryItem";

import styled from "styled-components";

const CategoryListWrap = styled.ul`
  margin-bottom: 40px;

  & li,
  & span {
    cursor: pointer;
  }

  border: 3px solid red;
`;

const CategoryList = ({ titleItem, activeItem }) => {
  const categories = ["work", "study", "entertainment", "family"];

  return (
    <CategoryListWrap>
      {categories.map((item, index) => (
        <li key={index}>
          <CategoryItem
            item={item}
            titleItem={titleItem}
            activeItem={activeItem}
          />
        </li>
      ))}
    </CategoryListWrap>
  );
};

export default CategoryList;
