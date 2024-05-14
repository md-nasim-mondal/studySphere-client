import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar";
import Footer from "../components/Shared/Footer";
import logo from "../assets/logo/study.svg";
import { Helmet } from "react-helmet";
import useAuth from "../hooks/useAuth";

const Main = () => {
  const { theme } = useAuth();
  return (
    <div className={`${theme === "light" ? "bg-gray-300" : "bg-[#1f2937]"}`}>
      <Helmet>
        <link rel='shortcut icon' href={logo} type='image/svg+x-icon' />
      </Helmet>
      <div className='mx-auto'>
        {/* Navbar */}
        <div className='bg-base-200 rounded-lg shadow-md'>
          <Navbar />
        </div>
        <div className=' container mx-auto min-h-[calc(100vh-345px)]'>
          {/* Outlet */}
          <Outlet />
        </div>
      </div>
      {/* Footer */}
      <div className='bg-base-200'>
        <div className='container mx-auto'>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Main;
