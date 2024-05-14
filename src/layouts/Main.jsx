import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar";
import Footer from "../components/Shared/Footer";
import logo from "../assets/logo/study.svg"
import { Helmet } from "react-helmet";

const Main = () => {
  return (
    <div className="">
    <Helmet>
          <link
            rel="shortcut icon"
            href={logo}
            type="image/svg+x-icon"
          />
      </Helmet>
      <div className='container mx-auto'>
        {/* Navbar */}
        <Navbar />
        <div className=" min-h-[calc(100vh-345px)]">
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
