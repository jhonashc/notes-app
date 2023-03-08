import { Note } from "../interfaces";
import { NoteItem } from "./NoteItem";

type NoteListProps = {
  notes: Note[];
};

export const NoteList: React.FC<NoteListProps> = ({ notes }): JSX.Element => {
  return (
    <ul>
      {notes?.map((note) => (
        <NoteItem note={note} key={note.id} />
      ))}
    </ul>
  );
};
