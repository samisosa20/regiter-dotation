//Packages
import React from "react";

const Home = React.lazy(() => import("./home"));

const useScreens = () => {
  return { Home };
};

export default useScreens;