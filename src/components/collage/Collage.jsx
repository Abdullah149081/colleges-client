/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from "react";
import CollageCard from "./CollageCard";

const Collage = () => {
  const [collages, setCollages] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/collage")
      .then((res) => res.json())
      .then((data) => setCollages(data));
  }, []);
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {collages.slice(0, 3).map((collage) => (
        <CollageCard key={collage._id} collage={collage} />
      ))}
    </div>
  );
};

export default Collage;
