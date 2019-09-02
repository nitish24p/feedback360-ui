import styled, { css } from 'styled-components';
import colors from './colors';

export const Button = styled.button`
  padding: 20px 35px;
  border: 2px solid #00ad9e;
  font-size: 20px;
  color: #fff;
  background: #00ad9e;
  cursor: pointer;
  outline: none;
  &:focus {
    background: #00ad9e;
    border: 2px solid #00ad9e;
  }
  &:active {
    background: #008478;
    border: 2px solid #008478;
  }
`;
