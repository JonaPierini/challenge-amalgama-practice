import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage";

export const PublicRoute = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route index path="*" element={<Navigate to={"/login"} />} />
    </Routes>
  );
};
