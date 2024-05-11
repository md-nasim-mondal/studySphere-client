import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar";

const Main = () => {
  return (
    <div>
      <div className="container mx-auto">
        {/* Navbar */}
      <Navbar/>
      {/* <h1 className="text-5xl">Main Home</h1> */}
      {/* Outlet */}
      <Outlet/>
      </div>

      {/* Footer */}
    </div>
  );
};

export default Main;