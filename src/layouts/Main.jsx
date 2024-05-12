import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar";
import Footer from "../components/Shared/Footer";

const Main = () => {
  return (
    <div>
      <div className='container mx-auto'>
        {/* Navbar */}
        <Navbar />
        <div className=" min-h-[calc(100vh-325px)]">
        {/* Outlet */}
        <Outlet />
        </div>
      </div>
      {/* Footer */}
      <div className="bg-base-200">
        <div className='container mx-auto'>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Main;
