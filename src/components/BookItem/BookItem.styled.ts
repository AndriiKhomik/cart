import styled from "styled-components";

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  border: 1px solid black;
  border-radius: 8px;
  padding: 8px;
`;

export const Box = styled.div`
  margin-bottom: 4px;
`;

export const ImgBox = styled.div`
  flex-grow: 1;
  img {
    height: auto;
    padding: 8px;
    object-fit: cover;
  }
`;

export const BuyButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: green;
  color: white;
  svg {
    margin-right: 8px;
  }
`;
