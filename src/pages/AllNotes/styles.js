import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const ContentArea = styled.section`
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
`;

export const NoteArea = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const NoteField = styled.div`
  display: flex;
  flex-wrap: wrap;

  background: #e3e3e3;
  width: 400px;
  height: 200px;
  padding: 8px;
  margin: 8px 8px 0 0;

  strong {
    font-family: 'Roboto';
    font-size: 20px;
    color: #2e2d2d;
  }

  svg {
    align-self: flex-start;
  }
`;
