import { Route, Routes, Navigate } from "react-router-dom";
import { Form, Home } from "../pages";

export const NotesRouter: React.FC = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<Form />} />
      <Route path="/notes/:noteId" element={<Form />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
