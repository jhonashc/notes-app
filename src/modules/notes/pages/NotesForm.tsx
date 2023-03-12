import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BsFillPencilFill } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { Form, Formik } from "formik";
import { v4 as uuidv4 } from "uuid";
import { TextField } from "../../../components";
import { NotesContext } from "../context";
import { Note } from "../interfaces";
import { notesFormSchema } from "../validators";

export const NotesForm: React.FC = (): JSX.Element => {
  const { noteId } = useParams();
  const navigate = useNavigate();
  const [initialNote, setInitialNote] = useState<Note>({
    id: "",
    title: "",
    content: "",
  });

  const { getNoteById, handleCreateNote, handleUpdateNote } =
    useContext(NotesContext);

  useEffect(() => {
    if (noteId) {
      const note: Note | undefined = getNoteById(noteId);
      note && setInitialNote(note);
    }
  }, [noteId]);

  return (
    <Formik
      initialValues={initialNote}
      enableReinitialize={true}
      validationSchema={notesFormSchema}
      onSubmit={(values, actions) => {
        const { title, content } = values;
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
      }}
    >
      {(props) => (
        <Form
          onSubmit={props.handleSubmit}
          className="space-y-6"
          autoComplete="off"
        >
          <TextField
            name="title"
            type="text"
            label="Title"
            placeholder="Enter a title"
          />
          <TextField
            name="content"
            type="text"
            label="Content"
            placeholder="Enter a content"
          />
          <button
            type="submit"
            className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {!noteId ? (
              <span className="inline-flex items-center">
                Create <AiOutlinePlus className="ml-1 text-lg" />
              </span>
            ) : (
              <span className="inline-flex items-center">
                Update <BsFillPencilFill className="ml-1 text-lg" />
              </span>
            )}
          </button>
        </Form>
      )}
    </Formik>
  );
};
