import { Route, Routes } from "react-router-dom";
import { AuthLayout, Layout } from "../components";
import { AuthRouter, NotesRouter } from "../modules";

export const AppRouter: React.FC = (): JSX.Element => {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="auth/*" element={<AuthRouter />} />
      </Route>
      <Route element={<Layout />}>
        <Route path="/*" element={<NotesRouter />} />
      </Route>
    </Routes>
  );
};
