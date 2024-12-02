import { Route, Routes } from "react-router-dom";
import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";
import { useAuthStore } from "../store/useAuthStore";

export const AppRouter = () => {
  const { status } = useAuthStore();

  return (
    <Routes>
      {status === "unAuthorized" ? (
        <Route path="*" element={<PublicRoute />} />
      ) : (
        <Route path="*" element={<PrivateRoute />} />
      )}
    </Routes>
  );
};
