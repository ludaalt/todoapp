import styled from "styled-components";

const StyledCategory = styled.span`
  display: inline-block;
  margin-right: 15px;
  width: 30px;
  height: 30px;
  border-radius: 50%;

  border: 3px solid green;

  /* background-color: ${(props) =>
    props.item === "work"
      ? "#d2ceff"
      : props.item === "study"
      ? "#d1e5f7"
      : props.item === "entertainment"
      ? "#ffcece"
      : props.item === "family"
      ? "#daf2d6"
      : "none"}; */

  background-color: ${(props) => (props.item === "family" ? "red" : "yellow")};
`;

const Category = ({ item }) => {
  console.log(item);
  return <StyledCategory item={item} aria-label="todo-category" />;
};

export default Category;
