import { useContext, useMemo, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { NoteList } from "../components";
import { NotesContext } from "../context";
import { Note } from "../interfaces";

export const Notes: React.FC = (): JSX.Element => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const { notesState, getNotesByQuery } = useContext(NotesContext);

  const query: string | null = searchParams.get("q");

  const notes: Note[] = useMemo(
    () => (query ? getNotesByQuery(query) : notesState.notes),
    [query, notesState]
  );

  useEffect(() => {
    if (!notes.length) {
      navigate("/", {
        replace: true,
      });
    }
  }, [notesState]);

  return <NoteList notes={notes} />;
};
