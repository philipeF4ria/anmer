import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  background: linear-gradient(90deg, #4b6cb7 0%, #182848 100%);
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex: 2;
  margin-left: 15px;

  > a {
    width: 120px;
    text-decoration: none;
  }
`;

export const Title = styled.h1`
  font-family: 'Lobster Two';
  font-size: 30px;
  color: #fafafa;
`;

export const Description = styled.strong`
  font-family: 'Roboto', sans-serif;
  font-size: 36px;
  color: #fafafa;
`;

export const Button = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 120px;
  height: 50px;
  background: #fc4a1a;
  color: #fafafa;
  border: none;
  margin-top: 25px;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    background: ${shade(0.1, '#fc4a1a')};
  }
`;

export const TextButton = styled.strong`
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
`;

export const ImageSection = styled.aside`
  height: 100vh;
  padding: 8px;
  display: flex;
  flex: 1;
  img {
    height: 500px;
    align-self: flex-end;
  }
`;
