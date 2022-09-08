import { useState } from "react";
import styled from "styled-components";

import Category from "../Category";

const ColorButton = styled.button`
  display: inline-block;
  width: 100%;
  border: none;
  padding: 8px 15px;
  text-align: right;
  display: flex;
  align-items: center;
  font-family: "Adobe";
  font-size: 15px;
  font-weight: bold;
  border-radius: 10px;
  cursor: pointer;
  background: ${(props) => (props.isActive ? "lightgray" : "none")};

  border: 3px solid red;

  &:hover {
    transition: 0.5s;
    background-color: #ebe9e4;
  }
`;

const CategoryItem = ({ item, titleItem }) => {
  const [isActive, setActive] = useState(false);

  console.log(isActive);

  // useEffect(() => {
  //   activeItem = isActive;
  // });

  return (
    <ColorButton type="button" isActive onClick={() => setActive(!isActive)}>
      <Category titleItem />
      {titleItem && item}
    </ColorButton>
  );
};

export default CategoryItem;
