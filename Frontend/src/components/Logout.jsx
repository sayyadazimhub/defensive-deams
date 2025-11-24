import toast from "react-hot-toast";
import { useAuth } from "../context/AuthProvider";

function Logout() {
  const [, setAuthUser] = useAuth();

  const handleLogout = () => {
    try {
      setAuthUser(null);
      toast.success("Logged out successfully");
    } catch (error) {
      toast.error(`Error: ${error.message || error}`);
    }
  };

  return (
    <button
      type="button"
      className="rounded-md bg-red-500 px-3 py-2 text-white duration-200 hover:bg-red-600"
      onClick={handleLogout}
    >
      Logout
    </button>
  );
}

export default Logout;
