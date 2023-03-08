import { useReducer } from "react";
import { notesReducer, NotesContextProps } from "../context";
import { Note, NotesState } from "../interfaces";

const INITIAL_STATE: NotesState = {
  notes: [
    {
      id: "1",
      title: "This is the first note",
      content: "Thisi is the first content",
    },
    {
      id: "2",
      title: "This is the second note",
      content: "Thisi is the second content",
    },
  ],
};

export const useNotes = (): NotesContextProps => {
  const [notesState, dispatch] = useReducer(notesReducer, INITIAL_STATE);

  const getNoteById = (id: string): Note | undefined => {
    return notesState?.notes.find((note) => note.id === id);
  };

  const handleCreateNote = (note: Note): void => {
    dispatch({ type: "CREATE_NOTE", payload: note });
  };

  const handleUpdateNote = (id: string, note: Note): void => {
    dispatch({ type: "UPDATE_NOTE", payload: { id, note } });
  };

  const handleDeleteNote = (id: string): void => {
    dispatch({ type: "DELETE_NOTE", payload: { id } });
  };

  return {
    notesState,
    notesCount: notesState.notes.length || 0,
    getNoteById,
    handleCreateNote,
    handleUpdateNote,
    handleDeleteNote,
  };
};
