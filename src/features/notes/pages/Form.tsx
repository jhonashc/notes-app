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
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a title"
          name="title"
          value={title}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Enter a content"
          name="content"
          value={content}
          onChange={handleChange}
        />
        <button type="submit">{!noteId ? "Create" : "Update"}</button>
      </form>
    </>
  );
};
