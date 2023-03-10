import { Route, Routes, Navigate } from "react-router-dom";
import { Home, NotesForm } from "../pages";

export const NotesRouter: React.FC = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<NotesForm />} />
      <Route path="/notes/:noteId" element={<NotesForm />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
