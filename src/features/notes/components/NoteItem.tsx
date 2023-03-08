import { Link } from "react-router-dom";
import { Note } from "../interfaces";
import { useContext } from "react";
import { NotesContext } from "../context/NotesContext";

type NoteItemProps = {
  note: Note;
};

export const NoteItem: React.FC<NoteItemProps> = ({ note }): JSX.Element => {
  const { handleDeleteNote } = useContext(NotesContext);

  return (
    <li>
      <h3>{note.title}</h3>
      <p>{note.content}</p>
      <span>{JSON.stringify(note.createdAt)}</span>
      <span>{JSON.stringify(note.updatedAt)}</span>
      <Link to={`/notes/${note.id}`}>Update</Link>
      <button onClick={() => handleDeleteNote(note.id)}>Delete</button>
    </li>
  );
};
