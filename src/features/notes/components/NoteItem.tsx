import { useContext } from "react";
import { Link } from "react-router-dom";
import { BsFillPencilFill, BsFillTrashFill } from "react-icons/bs";
import { Note } from "../interfaces";
import { NotesContext } from "../context";
import { NoteTagList } from "./NoteTagList";

type NoteItemProps = {
  note: Note;
};

export const NoteItem: React.FC<NoteItemProps> = ({ note }): JSX.Element => {
  const { handleDeleteNote } = useContext(NotesContext);

  return (
    <div className="w-100 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Link to={`/notes/${note.id}`}>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {note.title}
        </h5>
      </Link>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {note.content}
      </p>
      <NoteTagList tags={note?.tags || []} />
      <div className="flex mt-4 space-x-3">
        <Link
          to={`/notes/${note.id}`}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Update <BsFillPencilFill className="ml-1" />
        </Link>
        <button
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
          onClick={() => handleDeleteNote(note.id)}
        >
          Delete <BsFillTrashFill className="ml-1" />
        </button>
      </div>
    </div>
  );
};
