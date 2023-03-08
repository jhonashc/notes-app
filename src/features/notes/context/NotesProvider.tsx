import React from "react";
import { NotesContext } from "../context";
import { useNotes } from "../hooks";

type NotesProviderProps = {
  children: JSX.Element | JSX.Element[];
};

export const NotesProvider: React.FC<NotesProviderProps> = ({
  children,
}): JSX.Element => {
  const {
    notesState,
    notesCount,
    getNoteById,
    handleCreateNote,
    handleUpdateNote,
    handleDeleteNote,
  } = useNotes();

  return (
    <NotesContext.Provider
      value={{
        notesState,
        notesCount,
        getNoteById,
        handleCreateNote,
        handleUpdateNote,
        handleDeleteNote,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};
