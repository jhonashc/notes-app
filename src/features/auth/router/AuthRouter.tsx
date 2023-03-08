import { Route, Routes, Navigate } from "react-router-dom";
import { Login, Register } from "../pages";

export const AuthRouter: React.FC = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
