import styled, { css } from 'styled-components';
import colors from './colors';

export const Heading = styled.h2`
  color: ${props => colors[props.colors] || colors.primary};
  margin: ${props => props.margin};
`;

export const Paragraph = styled.p`
  color: ${props => colors[props.colors] || colors.primary};
`;

export const Input = styled.input`
  padding: 20px;
  border: 2px solid #fff;
  font-size: 20px;
  color: ${colors.textColor};
  &:focus {
    outline: none;
    border: 2px solid ${colors.primary};
  }
`;

export const SelectedInput = styled.select`
  height: 50px;
  padding: 20px;
  border: 2px solid #fff;
  font-size: 20px;
  color: ${colors.textColor};
  background: #fff;
  border-radius: 0px;
  height: 67px;
  &:focus {
    outline: none;
    border: 2px solid ${colors.primary};
  }
`;
