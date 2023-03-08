import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "../components";
import { AuthRouter, NotesRouter } from "../features";

export const AppRouter: React.FC = (): JSX.Element => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="auth/*" element={<AuthRouter />} />
        <Route path="/*" element={<NotesRouter />} />
      </Routes>
    </>
  );
};
