import { useContext } from "react";
import { NoteList } from "../components";
import { NotesContext } from "../context";

export const Home: React.FC = (): JSX.Element => {
  const { notesState } = useContext(NotesContext);

  return (
    <>
      <NoteList notes={notesState?.notes} />
    </>
  );
};
