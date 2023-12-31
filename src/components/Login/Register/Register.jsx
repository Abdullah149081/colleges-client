import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

import Social from "../Social/Social";

const Register = () => {
  const [error, setError] = useState("");
  const { updateUserProfile, createUser, logOut } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setError("");

    createUser(data.email, data.password)
      .then(() => {
        updateUserProfile(data.name, data.photo);
        logOut();
        navigate("/login");
      })
      .catch((err) => {
        setError(err?.message);
      });
  };
  return (
    <div>
      <div>
        <div>
          <div className="hero min-h-screen ">
            <img className="border-2 rounded-lg shadow-2xl max-w-screen-xl absolute w-full h-[800px]" src="https://e0.pxfuel.com/wallpapers/386/919/desktop-wallpaper-website-background-website-login-page-background.jpg" alt="" />
            <div className="hero-content w-full  flex-col lg:flex-row">
              <div className="card flex-shrink-0 w-full max-w-sm  ">
                <h2 className="text-center text-3xl font-bold text-white">Sign Up</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="px-4">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-base font-bold">Name</span>
                    </label>
                    <input type="text" placeholder="name" className="input input-bordered " {...register("name", { required: true })} />
                    {errors.name?.type === "required" && <span className="mt-1 text-sm text-error font-bold">Name is required</span>}
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-base font-bold">Photo Url</span>
                    </label>
                    <input type="url" placeholder="Photo Url" className="input input-bordered " {...register("photo", { required: true })} />
                    {errors.photo?.type === "required" && <span className="mt-1 text-sm text-error font-bold">Photo Url is required</span>}
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-base font-bold">Email</span>
                    </label>
                    <input type="email" placeholder="email" className="input input-bordered " {...register("email", { required: true })} />
                    {errors?.email && <span className="mt-1 text-sm text-error font-bold">Email is required</span>}
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-base font-bold">Password</span>
                    </label>
                    <input
                      type="password"
                      placeholder="Enter your password"
                      className="input input-bordered"
                      {...register("password", { required: true, minLength: 6, pattern: /(?=.*[A-Z])(?=.*[!@#$&*%])/ })}
                    />
                    {errors.password?.type === "required" && <span className="mt-1 text-sm text-error font-bold">Password is required</span>}
                    {errors.password?.type === "minLength" && <span className="mt-1 text-sm text-error font-bold">Password must be 6 character</span>}
                    {errors.password?.type === "pattern" && <span className="mt-1 text-sm text-error font-bold">Password must be One Uppercase && One Special Character </span>}
                  </div>

                  {error && <span className="text-error font-bold text-sm">{error}</span>}

                  <div className="form-control mt-6">
                    <button type="submit" className="btn border-0 font-bold">
                      Sign Up
                    </button>
                  </div>
                </form>
                <p className="mt-2 text-center  font-bold">
                  Already have an account ?
                  <Link className=" text-base font-semibold link-hover ml-2" to="/login">
                    log in
                  </Link>
                </p>
                <Social />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
