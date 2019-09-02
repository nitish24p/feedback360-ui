import styled, { css } from 'styled-components';
import colors from './colors';

const padding = {
  large: '20px 35px',
  regular: '12px 20px'
};

export const Button = styled.button`
  padding: ${props => padding[props.size] || padding.large};
  border: 2px solid #00ad9e;
  font-size: ${props => props.fontSize || '20px'};
  border-radius: ${props => (props.squared ? '0px' : '5px')};
  color: #fff;
  background: #00ad9e;
  cursor: pointer;
  outline: none;
  font-weight: 500;
  &:focus {
    background: #00ad9e;
    border: 2px solid #00ad9e;
  }
  &:active {
    background: #008478;
    border: 2px solid #008478;
  }
`;
