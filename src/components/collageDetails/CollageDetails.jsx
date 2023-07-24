import React from "react";
import { FaClock, FaLocationArrow } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

const CollageDetails = () => {
  const collageDetails = useLoaderData();
  const { collegeImage, collegeName, admissionProcess, events, researchWorks, sportsCategories } = collageDetails || {};
  return (
    <div className="collage-container">
      <div className="card  bg-base-100 shadow-xl">
        <figure>
          <img className="w-full object-cover" src={collegeImage} alt="Album" />
        </figure>
        <div className="card-body lg:w-4/5 mx-auto">
          <h2 className="card-title lg:text-3xl">{collegeName}</h2>
          <h2 className="text-lg font-bold">Admission Process</h2>

          <ul className="list-decimal ml-5">
            {admissionProcess.steps.map((step, idx) => (
              <li key={idx}>{step}</li>
            ))}
          </ul>
          <h2 className="text-lg font-bold">Event</h2>

          {events.map((event, idx) => (
            <div key={idx} className="space-y-2 font-semibold">
              <p>
                {idx + 1}) {event.name}
              </p>
              <p>{event.date}</p>
              <p>{event.description}</p>
              <p className="inline-flex items-center gap-4">
                <FaLocationArrow />
                {event.location}
              </p>
              <p className="flex items-center gap-4">
                <FaClock />
                {event.time}
              </p>
            </div>
          ))}

          <h2 className="text-lg font-bold">Research Works</h2>
          {researchWorks.map((research, idx) => (
            <div key={idx} className="space-y-2 ">
              <p className="font-semibold"> {research.name}</p>
              <p>Description: {research.description}</p>
            </div>
          ))}
          <h2 className="text-lg font-bold">Sports</h2>
          <div className="card-actions ">
            {sportsCategories.map((sports, idx) => (
              <div key={idx} className="badge tracking-wide font-medium badge-outline capitalize group-hover:text-lime-500 montserrat">
                {sports}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollageDetails;
