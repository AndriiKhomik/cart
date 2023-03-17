import styled from "styled-components";

export const List = styled.ul`
  list-style-type: none;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
  border-radius: 8px;
  padding: 8px 16px;
  margin-bottom: 8px;
  img {
    width: 56px;
  }
`;

export const TitleBox = styled.div`
  min-width: 500px;
  max-width: 500px;
  font-weight: bold;
`;

export const Box = styled.div``;

export const TotalPriceBox = styled.div`
  text-align: end;
  padding: 16px 0 16px;
`;

export const PriceBox = styled.div`
  min-width: 100px;
`;

export const QuantityWrapper = styled.div`
  width: 148px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
`;

export const Button = styled.button``;
