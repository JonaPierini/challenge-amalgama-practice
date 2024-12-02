import { useAuthStore } from "../store/useAuthStore";

export const HomePage = () => {
  const { logout } = useAuthStore();

  return (
    <div>
      <h3>Home Page</h3>
      <button onClick={() => logout()}>Cerrar sesion</button>
    </div>
  );
};
