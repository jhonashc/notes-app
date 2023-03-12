import { Route, Routes, Navigate } from "react-router-dom";
import { Home, Notes, NotesForm } from "../pages";

export const NotesRouter: React.FC = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<NotesForm />} />
      <Route path="/notes" element={<Notes />} />
      <Route path="/notes/:noteId" element={<NotesForm />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
