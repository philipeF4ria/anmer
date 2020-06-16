import React, { useState, useEffect } from 'react';

import Menu from '../../components/Menu';

import { Container, Workspace, AreaButton, Error } from './styles';

const Dashboard = () => {
  const [newNote, setNewNote] = useState('');
  const [inputError, setInputError] = useState('');
  const [notes, setNotes] = useState(() => {
    const notesStoraged = localStorage.getItem('@Anmer:notes');

    if (notesStoraged) {
      return JSON.parse(notesStoraged);
    }

    return [];
  });

  useEffect(() => {
    localStorage.setItem('@Anmer:notes', JSON.stringify(notes));
  }, [notes]);

  function handleSubmitNote() {
    if (!newNote) {
      setInputError('Digite algo no campo');
      return;
    }

    setNotes([...notes, newNote]);
    setInputError('');
    setNewNote('');
  }

  function handleCleanInputs() {
    setNewNote('');
  }

  return (
    <Container>
      <Menu />
      <Workspace hasError={!!inputError}>
        <h1>Escreva sua nota</h1>
        <textarea
          name="content"
          placeholder="Digite aqui o que você quiser..."
          value={newNote}
          onChange={(event) => setNewNote(event.target.value)}
          maxLength="170"
        />
        {inputError && <Error>{inputError}</Error>}
        <AreaButton>
          <button
            className="submitButton"
            type="button"
            onClick={handleSubmitNote}
          >
            Enviar
          </button>
          <button
            className="cleanButton"
            type="button"
            onClick={handleCleanInputs}
          >
            Limpar
          </button>
        </AreaButton>
      </Workspace>
    </Container>
  );
};

export default Dashboard;
