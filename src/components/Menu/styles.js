import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  height: 50px;
  color: #fc4a1a;
  display: flex;
  align-items: center;
`;

export const HeaderText = styled.h1`
  font-family: 'Lobster Two';
  font-size: 32px;
`;

export const Nav = styled.nav`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100vh;
  width: 250px;
  padding-left: 15px;
  border-right: 2px solid #f0f0f0;

  span {
    display: flex;
    align-items: center;
    font-size: 18px;
    padding: 15px 15px 15px 0;
    color: #4b6cb7;
    font-family: 'Roboto';
    cursor: pointer;

    svg {
      margin-right: 5px;
    }

    &:hover {
      background-color: #7a9be6;
      color: #fff;
      padding-left: 15px;
    }
  }
`;
