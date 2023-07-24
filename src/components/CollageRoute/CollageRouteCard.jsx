import React, { useState } from "react";
import { Link } from "react-router-dom";

const CollageRouteCard = ({ collage }) => {
  const { collegeImage, collegeName, admissionDates, events, sportsCategories, researchWorks } = collage || {};
  console.log(sportsCategories);
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };
  return (
    <div>
      <div className="card card-compact h-full  bg-base-100 shadow-xl group">
        <figure>
          <img className="h-56 w-full group-hover:scale-125 transition duration-300" src={collegeImage} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{collegeName}</h2>
          <h2 className="card-title">
            {admissionDates.start} - {admissionDates.end}
          </h2>

          <p className="lg:text-lg font-semibold">Research Works -{researchWorks.length}</p>

          {show && (
            <p className="transition duration-200">
              Event -
              {events.map((event, idx) => (
                <span className="badge badge-neutral ml-1 mt-1" key={idx}>
                  {event.name}
                </span>
              ))}
              .
            </p>
          )}

          {show && (
            <div className="card-actions mt-2 ">
              {sportsCategories.map((sports, idx) => (
                <div key={idx} className="badge tracking-wide font-medium badge-outline capitalize ">
                  {sports}
                </div>
              ))}
            </div>
          )}

          <button onClick={handleShow} type="button" className="btn btn-neutral">
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default CollageRouteCard;
