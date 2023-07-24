import React from "react";
import { Outlet } from "react-router-dom";
import { FadeLoader } from "react-spinners";
import useAuth from "../Hooks/useAuth";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const Main = () => {
  const { loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col gap-8 justify-center items-center">
        <h2 className="text-4xl font-bold animate-ping">Collage</h2>

        <FadeLoader color="#36d7b7" />
      </div>
    );
  }
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
