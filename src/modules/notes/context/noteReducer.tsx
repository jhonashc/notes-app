import { Note, NotesState } from "../interfaces";

type NotesAction =
  | { type: "CREATE_NOTE"; payload: Note }
  | { type: "UPDATE_NOTE"; payload: { id: string; note: Note } }
  | { type: "DELETE_NOTE"; payload: { id: string } };

export const notesReducer = (
  state: NotesState,
  action: NotesAction
): NotesState => {
  switch (action.type) {
    case "CREATE_NOTE":
      return {
        ...state,
        notes: [...state.notes, action.payload],
      };
    case "UPDATE_NOTE":
      return {
        ...state,
        notes: state?.notes.map((note) =>
          note.id === action.payload.id
            ? {
                ...note,
                title: action.payload.note.title,
                content: action.payload.note.content,
                updatedAt: action.payload.note.updatedAt,
              }
            : note
        ),
      };
    case "DELETE_NOTE":
      return {
        ...state,
        notes: state?.notes.filter((note) => note.id !== action.payload.id),
      };
    default:
      return state;
  }
};
