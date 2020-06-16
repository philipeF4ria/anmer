import React, { useState } from 'react';

import Menu from '../../components/Menu';

import { Container, ContentArea, NoteArea, NoteField } from './styles';

const AllNotes = () => {
  const [notes] = useState(() => {
    const notesStoraged = localStorage.getItem('@Anmer:notes');

    if (notesStoraged) {
      return JSON.parse(notesStoraged);
    }

    return [];
  });

  return (
    <Container>
      <Menu />
      <ContentArea>
        <h1>Suas notas</h1>
        <NoteArea>
          {notes.map((note, index) => (
            <NoteField key={index}>
              <strong>{note}</strong>
            </NoteField>
          ))}
        </NoteArea>
      </ContentArea>
    </Container>
  );
};

export default AllNotes;
