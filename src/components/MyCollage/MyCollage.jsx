import { handler } from "daisyui";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";

const MyCollage = () => {
  const [collages, setCollages] = useState([]);
  const [collageName, setCollageName] = useState("");
  const { user } = useAuth();

  useEffect(() => {
    fetch(`http://localhost:5000/admissionByEmail?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setCollages(data));
  }, [user?.email]);

  const handlerReview = (e) => {
    e.preventDefault();
    const form = e.target;
    const review = parseInt(form.review.value, 10);
    const name = user.displayName;
    const { email } = user;
    const university = collageName;
    const reviewAdd = { review, name, email, university };

    fetch("https://collage-server-delta.vercel.app/review", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reviewAdd),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "success",
            text: "Review add successfully",
            icon: "success",
            confirmButtonText: "ok",
          });
          form.reset();
        }
      });
  };
  return (
    <div className="collage-container min-h-screen ">
      <div className="overflow-x-auto">
        <table className="table table-zebra text-center -z-0 w-full">
          {/* head */}
          <thead>
            <tr>
              <th className="capitalize text-base bg-sky-200 bg-opacity-20">Sl No</th>
              <th className="capitalize text-base bg-sky-200 bg-opacity-20">Collage Name</th>
              <th className="capitalize text-base bg-sky-200 bg-opacity-20">Subject</th>

              <th className="capitalize text-base bg-sky-200 bg-opacity-20">address</th>
              <th className="capitalize text-base bg-sky-200 bg-opacity-20">Rating</th>
            </tr>
          </thead>
          <tbody>
            {collages?.map((collage, idx) => (
              <tr className="font-semibold" key={collage._id}>
                <th>{idx + 1}</th>
                <td>{collage.collage}</td>
                <td>{collage.ClassName}</td>
                <td>{collage.address}</td>
                <td>
                  <form onSubmit={handlerReview} action="">
                    <div className="join">
                      <input className="input input-bordered join-item" type="number" name="review" id="" min={1} max={5} required />
                      <button onClick={() => setCollageName(collage.collage)} type="submit" className="btn btn-neutral  join-item rounded-r-full">
                        Review
                      </button>
                    </div>
                  </form>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCollage;
