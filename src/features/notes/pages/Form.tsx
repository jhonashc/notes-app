import { FormEvent, useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useForm } from "../../../hooks";
import { NotesContext } from "../context";
import { Note } from "../interfaces";

type FormData = {
  title: string;
  content: string;
};

export const Form: React.FC = (): JSX.Element => {
  const { noteId } = useParams();
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  const { getNoteById, handleCreateNote, handleUpdateNote } =
    useContext(NotesContext);

  const { title, content, handleChange, handleSetFormState } =
    useForm<FormData>({
      title: "",
      content: "",
    });

  const handleSubmit = (event: FormEvent): void => {
    event.preventDefault();

    if (!title || !content) {
      setMessage("You must enter a title and content");
      return;
    }

    const currentDate = new Date();

    const note: Note = {
      id: uuidv4(),
      title,
      content,
      createdAt: currentDate,
      updatedAt: currentDate,
    };

    if (!noteId) {
      handleCreateNote(note);
    } else {
      handleUpdateNote(noteId, { ...note, updatedAt: new Date() });
    }

    navigate("/", {
      replace: true,
    });
  };

  useEffect(() => {
    if (noteId) {
      const note: Note | undefined = getNoteById(noteId);
      if (note) handleSetFormState(note);
    }
  }, [noteId]);

  return (
    <>
      {message && (
        <div
          className="flex p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800"
          role="alert"
        >
          <svg
            aria-hidden="true"
            className="flex-shrink-0 inline w-5 h-5 mr-3"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="sr-only">Info</span>
          <div>
            <span className="font-medium">Danger alert!</span> {message}
          </div>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Title
          </label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={handleChange}
            placeholder="Write your title..."
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Content
          </label>
          <input
            type="text"
            name="content"
            value={content}
            onChange={handleChange}
            placeholder="Write your content..."
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          />
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          {!noteId ? "Create" : "Update"}
        </button>
      </form>
    </>
  );
};
