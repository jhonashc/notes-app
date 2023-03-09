import { Note } from "../interfaces";
import { NoteItem } from "./NoteItem";

type NoteListProps = {
  notes: Note[];
};

export const NoteList: React.FC<NoteListProps> = ({ notes }): JSX.Element => {
  return (
    <ul className="grid md:grid-cols-2 xl:grid-cols-3 gap-3">
      {notes?.map((note) => (
        <NoteItem note={note} key={note.id} />
      ))}
    </ul>
  );
};
