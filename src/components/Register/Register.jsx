import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const { createUser } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [registerError, setRegisterError] = useState("");
  const [registerSuccess, setRegisterSuccess] = useState("");

  const onSubmit = async (data) => {
    const { name, email, password, confirmPassword, photoURL } = data;
    setRegisterError("");
    setRegisterSuccess("");

    if (password.length < 6) {
      setRegisterError("Password should be at least 6 characters long.");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegisterError("Password must contain at least one uppercase letter.");
      return;
    } else if (password !== confirmPassword) {
      setRegisterError("Passwords do not match.");
      return;
    }

    try {
      await createUser(email, password);
      setRegisterSuccess("User registered successfully!");
      toast.success("Registration successful! Please verify your email.");
      window.location.href = "/login";
    } catch (error) {
      console.error("Registration failed:", error.message);
      setRegisterError(error.message);
      toast.error("Registration failed. Please try again.");
    }
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register Now!</h1>
          <p className="py-6">Join us and explore amazing features!</p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">Name</label>
              <input type="text" {...register("name", { required: true })} placeholder="Your Name" className="input input-bordered" />
              {errors.name && <p className="text-red-500 text-sm">Name is required</p>}
            </div>

            <div className="form-control">
              <label className="label">Email</label>
              <input type="email" {...register("email", { required: true })} placeholder="Your Email" className="input input-bordered" />
              {errors.email && <p className="text-red-500 text-sm">Email is required</p>}
            </div>

            <div className="form-control">
              <label className="label">Photo URL</label>
              <input type="text" {...register("photoURL", { required: true })} placeholder="Your Photo URL" className="input input-bordered" />
              {errors.photoURL && <p className="text-red-500 text-sm">Photo URL is required</p>}
            </div>

            <div className="form-control relative">
              <label className="label">Password</label>
              <input type={showPassword ? "text" : "password"} {...register("password", { required: true })} placeholder="Enter Password" className="input input-bordered" />
              <span className="absolute top-10 right-4 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
              {errors.password && <p className="text-red-500 text-sm">Password is required</p>}
            </div>

            <div className="form-control">
              <label className="label">Confirm Password</label>
              <input type="password" {...register("confirmPassword", { required: true })} placeholder="Confirm Password" className="input input-bordered" />
              {errors.confirmPassword && <p className="text-red-500 text-sm">Please confirm your password</p>}
            </div>

            <div className="form-control mt-4">
              <input type="checkbox" {...register("terms", { required: true })} className="mr-2" />
              <span>Accept Terms & Conditions</span>
              {errors.terms && <p className="text-red-500 text-sm">You must accept terms & conditions</p>}
            </div>

            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">Register</button>
            </div>
            {registerError && <p className="text-red-700 mt-2">{registerError}</p>}
            {registerSuccess && <p className="text-green-600 mt-2">{registerSuccess}</p>}
            <p className="mt-2">Already have an account? <Link to="/login" className="text-blue-600 underline">Login</Link></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;