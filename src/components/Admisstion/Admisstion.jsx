import React, { useEffect, useState } from "react";
import AdmissionModal from "./AdmissionModal";

const Admission = () => {
  const [collages, setCollages] = useState([]);
  useEffect(() => {
    fetch("https://collage-server-delta.vercel.app/collage")
      .then((res) => res.json())
      .then((data) => setCollages(data));
  }, []);
  return (
    <div className="collage-container">
      <div className="">
        {collages.map((collage) => (
          <AdmissionModal key={collage._id} collage={collage} />
        ))}
      </div>
    </div>
  );
};

export default Admission;
