import { FormEvent, useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BsFillInfoCircleFill, BsFillPencilFill } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { IoCloseOutline } from "react-icons/io5";
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
  const [message, setMessage] = useState<string>("");

  const { getNoteById, handleCreateNote, handleUpdateNote } =
    useContext(NotesContext);

  const { title, content, handleChange, handleSetFormState } =
    useForm<FormData>({
      title: "",
      content: "",
    });

  const handleClose = () => {
    setMessage("");
  };

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
        <div className="flex items-center justify-between p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800">
          <div className="flex items-center">
            <BsFillInfoCircleFill className="mr-1" />
            <span className="font-medium mr-1">Danger alert!</span> {message}
          </div>
          <button className="text-xl" onClick={handleClose}>
            <IoCloseOutline />
          </button>
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
          {!noteId ? (
            <span className="inline-flex items-center">
              Create <AiOutlinePlus className="ml-1" />
            </span>
          ) : (
            <span className="inline-flex items-center">
              Update <BsFillPencilFill className="ml-1" />
            </span>
          )}
        </button>
      </form>
    </>
  );
};
