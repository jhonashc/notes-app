import { useReducer } from "react";
import { notesReducer, NotesContextProps } from "../context";
import { Note, NotesState } from "../interfaces";

const INITIAL_STATE: NotesState = {
  notes: [
    {
      id: "12ee587c-1bb9-4f05-af94-9ba2efb08132",
      title: "Noteworthy technology acquisitions 2021",
      content:
        "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
      tags: [
        {
          id: "c62ee587c-1bb9-4f05-af94-9ba2efb08132",
          name: "Frontend",
        },
        {
          id: "4g2ee587c-1bb9-4f05-af94-9ba2efb08132",
          name: "React",
        },
      ],
    },
    {
      id: "x2ee587c-1bb9-4f05-af94-9ba2efb08132",
      title: "Noteworthy technology acquisitions 2021",
      content:
        "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
      tags: [
        {
          id: "yg2ee587c-1bb9-4f05-af94-9ba2efb08132",
          name: "Freelancer",
        },
      ],
    },
    {
      id: "vdee587c-1bb9-4f05-af94-9ba2efb08132",
      title: "Noteworthy technology acquisitions 2021",
      content:
        "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
      tags: [
        {
          id: "e2ee587c-1bb9-4f05-af94-9ba2efb08132",
          name: "Develop",
        },
        {
          id: "bg2ee587c-1bb9-4f05-af94-9ba2efb08132",
          name: "Freelancer",
        },
      ],
    },
  ],
};

export const useNotes = (): NotesContextProps => {
  const [notesState, dispatch] = useReducer(notesReducer, INITIAL_STATE);

  const getNoteById = (id: string): Note | undefined => {
    return notesState?.notes.find((note) => note.id === id);
  };

  const getNotesByQuery = (query: string): Note[] => {
    return notesState.notes?.filter(
      (note) =>
        note.title.toLowerCase().includes(query) ||
        note.tags?.some((tag) => tag.name.toLowerCase().includes(query))
    );
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
    getNotesByQuery,
    handleCreateNote,
    handleUpdateNote,
    handleDeleteNote,
  };
};
