import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage";
import { RootRoutes } from "./def";

export const PublicRoute = () => {
  return (
    <Routes>
      <Route path={RootRoutes.Login} element={<LoginPage />} />
      <Route index path="*" element={<Navigate to={RootRoutes.Login} />} />
    </Routes>
  );
};
