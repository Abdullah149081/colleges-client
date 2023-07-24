import { handler } from "daisyui";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FcAddRow } from "react-icons/fc";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";

const AdmissionModal = ({ collage }) => {
  const { collegeImage, collegeName, admissionDates, events, researchHistory, sportsCategories, _id } = collage || {};
  const [show, setShow] = useState(false);
  const { user } = useAuth();

  const handlerInput = () => {
    setShow(!show);
  };

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    data.collage = collegeName;
    fetch("https://collage-server-delta.vercel.app/admission", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((add) => {
        if (add.insertedId) {
          Swal.fire({
            title: "success",
            text: "Admission add successfully",
            icon: "success",
            confirmButtonText: "ok",
          });
        }
      });
  };

  return (
    <div className="mt-5">
      <button onClick={handlerInput} type="button" className="btn btn-outline btn-success">
        {collegeName}
      </button>
      {show && (
        <div>
          <div className="w-full">
            <div className="">
              <div>
                <div className="bg-gray-600 text-white rounded-lg border p-4 lg:p-14  ">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid gap-6 lg:grid-cols-2">
                      <div className="form-control w-full ">
                        <label className="label">
                          <span className="label-text font-semibold text-base text-white">
                            Subject <span className="text-pink-500">*</span>
                          </span>
                        </label>
                        <select {...register("ClassName", { required: true })} className="select select-bordered text-black">
                          <option className="capitalize">English</option>
                          <option className="capitalize">Regional Language</option>
                          <option className="capitalize">Maths</option>
                          <option className="capitalize">Science</option>
                          <option className="capitalize">Social Sciences</option>
                          <option className="capitalize">History</option>
                        </select>
                      </div>
                      <div className="form-control w-full mb-4">
                        <label className="label">
                          <span className="label-text font-semibold text-base text-white">
                            Image <span className="text-pink-500">*</span>
                          </span>
                        </label>
                        <input {...register("photo", { required: true })} type="url" placeholder="picture" className="input input-bordered w-full text-black" />
                      </div>
                      <div className="form-control w-full ">
                        <label className="label">
                          <span className="label-text font-semibold text-base text-white">Candidate Name</span>
                        </label>
                        <input {...register("name", { required: true })} type="text" value={user.displayName} className="input input-bordered w-full text-black" />
                      </div>
                      <div className="form-control w-full ">
                        <label className="label">
                          <span className="label-text font-semibold text-base text-white">Candidate email </span>
                        </label>
                        <input {...register("email", { required: true })} type="email" value={user.email} className="input input-bordered w-full text-black " />
                      </div>
                      <div className="form-control w-full">
                        <label className="label">
                          <span className="label-text font-semibold text-base text-white">
                            Candidate Phone number <span className="text-pink-500">*</span>
                          </span>
                        </label>
                        <input {...register("number", { required: true })} type="text" placeholder="Type here" className="input input-bordered w-full text-black " />
                      </div>
                      <div className="form-control w-full">
                        <label className="label">
                          <span className="label-text font-semibold text-base text-white">
                            Date of birth <span className="text-pink-500">*</span>
                          </span>
                        </label>
                        <input {...register("birth", { required: true })} type="text" placeholder="dd-mm-yy" className="input input-bordered w-full text-black " />
                      </div>
                    </div>
                    <div className="form-control w-full ">
                      <label className="label">
                        <span className="label-text font-semibold text-base text-white">Address</span>
                      </label>
                      <input {...register("address", { required: true })} type="text" className="input input-bordered w-full text-black" />
                    </div>
                    <div className="mt-6">
                      <button type="submit" className="btn-neutral btn">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdmissionModal;
