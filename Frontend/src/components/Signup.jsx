import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthProvider";
import { LOGIN_MODAL_ID } from "./Login";
import apiClient from "../lib/apiClient";
import { ROUTE_PATHS } from "../constants/routes";

function Signup() {
  const [, setAuthUser] = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || ROUTE_PATHS.HOME;
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const openLoginModal = () => {
    if (typeof document === "undefined") return;
    document.getElementById(LOGIN_MODAL_ID)?.showModal();
  };

  const onSubmit = async (data) => {
    try {
      const { data: response } = await apiClient.post("/user/signup", {
        fullname: data.fullname,
        email: data.email,
        password: data.password,
      });
      if (response?.user) {
        toast.success("Signup successful");
        setAuthUser(response.user);
        reset();
        navigate(from, { replace: true });
      }
    } catch (error) {
      const message =
        error.response?.data?.message || "Unable to sign up. Please try again.";
      toast.error(`Error: ${message}`);
    }
  };

  return (
    <div className="mx-auto flex max-w-screen-xl justify-center px-4 py-16">
      <div className="w-full max-w-xl rounded-2xl bg-white/50 p-8 shadow-lg backdrop-blur-md dark:bg-slate-800/70">
        <h3 className="text-2xl font-bold text-center">Create an account</h3>
        <p className="mt-2 text-center text-sm text-slate-500 dark:text-slate-300">
          Join Defensive DEAMS to unlock members-only strategies and alerts.
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
          <div>
            <label className="block text-sm font-medium" htmlFor="signup-name">
              Full Name
            </label>
            <input
              id="signup-name"
              type="text"
              placeholder="Enter your fullname"
              className="mt-2 w-full rounded-md border px-3 py-2 outline-none"
              autoComplete="name"
              {...register("fullname", { required: "Please provide your name." })}
            />
            {errors.fullname && (
              <span className="text-sm text-red-500">
                {errors.fullname.message}
              </span>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium" htmlFor="signup-email">
              Email
            </label>
            <input
              id="signup-email"
              type="email"
              placeholder="Enter your email"
              className="mt-2 w-full rounded-md border px-3 py-2 outline-none"
              autoComplete="email"
              {...register("email", { required: "Email is required to continue." })}
            />
            {errors.email && (
              <span className="text-sm text-red-500">
                {errors.email.message}
              </span>
            )}
          </div>
          <div>
            <label
              className="block text-sm font-medium"
              htmlFor="signup-password"
            >
              Password
            </label>
            <input
              id="signup-password"
              type="password"
              placeholder="Enter your password"
              className="mt-2 w-full rounded-md border px-3 py-2 outline-none"
              autoComplete="new-password"
              {...register("password", {
                required: "Password must be at least 6 characters.",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters.",
                },
              })}
            />
            {errors.password && (
              <span className="text-sm text-red-500">
                {errors.password.message}
              </span>
            )}
          </div>
          <button
            type="submit"
            className="w-full rounded-md bg-pink-500 px-4 py-2 text-white duration-200 hover:bg-pink-600 disabled:cursor-not-allowed disabled:opacity-70"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Creating account..." : "Signup"}
          </button>
          <p className="text-center text-sm">
            Already have an account?{" "}
            <button
              type="button"
              className="text-blue-500 underline"
              onClick={openLoginModal}
            >
              Login
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
