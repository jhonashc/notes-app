import { useContext } from "react";
import { Link } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
import { NoteList } from "../components";
import { NotesContext } from "../context";

export const Home: React.FC = (): JSX.Element => {
  const { notesState } = useContext(NotesContext);

  return (
    <>
      <NoteList notes={notesState?.notes} />
      <Link
        to="/new"
        className="h-10 w-10 fixed right-3 bottom-3 md:bottom-3 md:left-1/2 text-white text-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full p-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        <AiOutlinePlus className="w-full" />
      </Link>
    </>
  );
};
