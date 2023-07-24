/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from "react";
import CollageCard from "../collage/CollageCard";
import CollageRouteCard from "./CollageRouteCard";

const CollageRoute = () => {
  const [collages, setCollages] = useState([]);
  useEffect(() => {
    fetch("https://collage-server-delta.vercel.app/collage")
      .then((res) => res.json())
      .then((data) => setCollages(data));
  }, []);
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 collage-container">
      {collages.map((collage) => (
        <CollageRouteCard key={collage._id} collage={collage} />
      ))}
    </div>
  );
};

export default CollageRoute;
