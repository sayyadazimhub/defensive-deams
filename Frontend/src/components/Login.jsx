import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import PropTypes from "prop-types";
import { useAuth } from "../context/AuthProvider";
import apiClient from "../lib/apiClient";
import { ROUTE_PATHS } from "../constants/routes";

export const LOGIN_MODAL_ID = "login-modal";

function Login({ modalId = LOGIN_MODAL_ID }) {
  const [, setAuthUser] = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const closeModal = () => {
    if (typeof document === "undefined") return;
    document.getElementById(modalId)?.close();
  };

  const onSubmit = async (data) => {
    try {
      const { data: response } = await apiClient.post("/user/login", {
        email: data.email,
        password: data.password,
      });
      if (response?.user) {
        setAuthUser(response.user);
        toast.success("Logged in successfully");
        reset();
        closeModal();
      }
    } catch (error) {
      const message =
        error.response?.data?.message || "Unable to log in. Please try again.";
      toast.error(`Error: ${message}`);
    }
  };

  return (
    <dialog id={modalId} className="modal">
      <div className="modal-box">
        <form onSubmit={handleSubmit(onSubmit)}>
          <button
            type="button"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={closeModal}
            aria-label="Close login modal"
          >
            ✕
          </button>

          <h3 className="text-lg font-bold">Login</h3>
          <div className="mt-4 space-y-2">
            <label className="block text-sm font-medium" htmlFor="login-email">
              Email
            </label>
            <input
              id="login-email"
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-md border px-3 py-2 outline-none"
              autoComplete="email"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <span className="text-sm text-red-500">
                {errors.email.message}
              </span>
            )}
          </div>
          <div className="mt-4 space-y-2">
            <label
              className="block text-sm font-medium"
              htmlFor="login-password"
            >
              Password
            </label>
            <input
              id="login-password"
              type="password"
              placeholder="Enter your password"
              className="w-full rounded-md border px-3 py-2 outline-none"
              autoComplete="current-password"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && (
              <span className="text-sm text-red-500">
                {errors.password.message}
              </span>
            )}
          </div>

          <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <button
              type="submit"
              className="rounded-md bg-pink-500 px-4 py-2 text-white duration-200 hover:bg-pink-600 disabled:cursor-not-allowed disabled:opacity-70"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Signing in..." : "Login"}
            </button>
            <p className="text-sm">
              Not registered?{" "}
              <Link
                to={ROUTE_PATHS.SIGNUP}
                className="text-blue-500 underline"
              >
                Signup
              </Link>
            </p>
          </div>
        </form>
      </div>
    </dialog>
  );
}

export default Login;

Login.propTypes = {
  modalId: PropTypes.string,
};
