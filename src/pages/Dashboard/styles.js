import styled, { css } from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
`;

export const Workspace = styled.section`
  display: flex;
  flex: 4;
  flex-direction: column;
  background-color: #fafafa;
  padding: 10px 0 10px 20px;

  > h1 {
    font-family: 'Roboto';
    font-size: 40px;
    color: #4b6cb7;
  }

  textarea {
    width: 400px;
    height: 250px;
    resize: none;
    border: 1px solid #36518a;
    background: #fff;
    color: #012e42;
    font-family: 'Roboto';
    font-size: 18px;
    padding: 8px;

    ${(props) =>
      props.hasError &&
      css`
        border-color: #c53030;
      `}
  }
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
`;

export const AreaButton = styled.div`
  padding-top: 10px;

  button {
    border: none;
    padding: 15px;
    color: #fff;
    font-family: 'Roboto';
    font-weight: bold;
    width: 195px;
    height: 50px;
  }

  .submitButton {
    background: #36eb3f;
    margin-right: 10px;

    &:hover {
      background: ${shade(0.2, '#36eb3f')};
    }
  }

  .cleanButton {
    background: #fc4a1a;

    &:hover {
      background: ${shade(0.2, '#fc4a1a')};
    }
  }
`;
