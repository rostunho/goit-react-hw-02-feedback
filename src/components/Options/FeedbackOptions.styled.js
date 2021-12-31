import styled from 'styled-components';

export const Buttons = styled.ul`
  display: flex;
`;

export const Button = styled.button`
  width: 100px;
  height: 75px;
  border-radius: 10px;
  border: none;

  color: #ffffff;
  font-size: 20px;
  font-weight: 400;

  background-color: #008fcc;

  cursor: pointer;

  &:hover,
  &:focus {
    background-color: #0082ba;
  }
`;

export const Item = styled.li`
  /* margin-left: 10px; */

  &:not(:first-child) {
    margin-left: 5px;
  }
`;
