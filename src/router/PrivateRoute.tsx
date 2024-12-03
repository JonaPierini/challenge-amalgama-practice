import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { RootRoutes } from "./def";

export const PrivateRoute = () => {
  return (
    <Routes>
      <Route index path={RootRoutes.Home} element={<HomePage />} />
      <Route path="*" element={<Navigate to={RootRoutes.Home} />} />
    </Routes>
  );
};
