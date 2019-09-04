import styled, { css, keyframes } from 'styled-components';
import colors from './colors';

const loaderProgress = keyframes`
  from {
    width: 0%;
  }
  to {
    width: 99.9%;
  }
`;

export const ParentContainer = styled.div`
  min-height: 100vh;
`;

export const FlexCenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  @media (max-width: 460px) {
    align-items: baseline;
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.06);
  border: 1px solid #eaeaea;
  @media (max-width: 460px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const Loader = styled.div`
  height: 20px;
  width: 0%;
  transitiion: width;
  animation: ${loaderProgress} 5s linear forwards;
  position: absolute;
  top: ${props => (props.fixtop ? '0px' : '')};
  bottom: ${props => (props.fixbottom ? '0px' : '')};
  left: ${props => (props.fixleft ? '0px' : '')};
  bottom: ${props => (props.fixbottom ? '0px' : '')};
  background: ${colors.primary};
`;

export const Container = styled.div`
  padding: 0px 20px;
`;

export const Card = styled.div`
  background-color: #fff;
  border-radius: 8px;
  -webkit-box-shadow: 0 2px 4px 0 rgba(14, 30, 37, 0.12);
  box-shadow: 0 2px 4px 0 rgba(14, 30, 37, 0.12);
  color: rgba(14, 30, 37, 0.54);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  margin-top: 24px;
  min-width: 264px;
  padding: 24px;
`;
