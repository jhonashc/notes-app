import React from "react";
import { Note, NotesState } from "../interfaces";

export type NotesContextProps = {
  notesState: NotesState;
  notesCount: number;
  getNoteById: (id: string) => Note | undefined;
  getNotesByQuery: (query: string) => Note[];
  handleCreateNote: (note: Note) => void;
  handleUpdateNote: (id: string, note: Note) => void;
  handleDeleteNote: (id: string) => void;
};

export const NotesContext: React.Context<NotesContextProps> =
  React.createContext({} as NotesContextProps);
