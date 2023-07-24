import React from "react";

const CollageCard = ({ collage }) => {
  const { collegeImage, collegeName, admissionDates, events, researchHistory, sportsCategories, _id } = collage || {};
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

          <p>
            Event -
            {events.map((event, idx) => (
              <span className="badge badge-neutral ml-1 mt-1" key={idx}>
                {event.name}
              </span>
            ))}
            .
          </p>
          <p>
            Research History -{researchHistory.start} -{researchHistory.end}
          </p>
          <div className="card-actions ">
            {sportsCategories.map((sports, idx) => (
              <div key={idx} className="badge tracking-wide font-medium badge-outline capitalize group-hover:text-lime-500 montserrat">
                {sports}
              </div>
            ))}
          </div>

          <div className="card-actions ">
            <button type="button" className="btn btn-neutral">
              Add a Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollageCard;
