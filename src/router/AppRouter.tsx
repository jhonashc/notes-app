import { Route, Routes } from "react-router-dom";
import { Layout } from "../components";
import { AuthRouter, NotesRouter } from "../features";

export const AppRouter: React.FC = (): JSX.Element => {
  return (
    <>
      <Routes>
        <Route path="auth/*" element={<AuthRouter />} />
        <Route element={<Layout />}>
          <Route path="/*" element={<NotesRouter />} />
        </Route>
      </Routes>
    </>
  );
};
