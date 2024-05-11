import userDefaultPic from "../../assets/images/user.png";
import logo from "../../assets/logo/study.svg";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { IoClose, IoMenu } from "react-icons/io5";
import { useState } from "react";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { user, logOut } = useAuth();

  const navLinks = (
    <>
      <li>
        <NavLink
          onClick={() => setOpen(false)}
          className={({ isActive }) =>
            !isActive
              ? "btn xl:text-lg font-semibold btn-outline bg-none border-none  rounded-lg text-black  mb-2  md:mr-1"
              : "btn  btn-outline xl:text-lg border-x-0 border-t-0 text-[#23BE0A]  border-[#23BE0A] border-b-4 btn-ghost mb-2  md:mr-1"
          }
          to='/'>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          onClick={() => setOpen(false)}
          className={({ isActive }) =>
            !isActive
              ? "btn xl:text-lg font-semibold btn-outline bg-none border-none  rounded-lg text-black  mb-2  md:mr-1"
              : "btn  btn-outline xl:text-lg border-x-0 border-t-0 text-[#23BE0A]  border-[#23BE0A] border-b-4 btn-ghost mb-2  md:mr-1"
          }
          to={"/assignments"}>
          Assignments
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                !isActive
                  ? "btn xl:text-lg font-semibold btn-outline bg-none border-none  rounded-lg text-black  mb-2  md:mr-1"
                  : "btn  btn-outline xl:text-lg border-x-0 border-t-0 text-[#23BE0A]  border-[#23BE0A] border-b-4 btn-ghost mb-2  md:mr-1"
              }
              to={"/createAssignments"}>
              Create Assignments
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                !isActive
                  ? "btn xl:text-lg font-semibold btn-outline bg-none border-none  rounded-lg text-black  mb-2  md:mr-1"
                  : "btn  btn-outline xl:text-lg border-x-0 border-t-0 text-[#23BE0A]  border-[#23BE0A] border-b-4 btn-ghost mb-2  md:mr-1"
              }
              to={"/pendingAssignments"}>
              Pending Assignments
            </NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className='navbar bg-base-100 shadow-sm container lg:gap-16 justify-between mx-auto'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <div
            tabIndex={0}
            role='button'
            onClick={() => setOpen(!open)}
            className={`btn-ghost lg:hidden
            ${user ? "2xl:hidden" : "lg:hidden"}
                            `}>
            {open ? (
              <IoClose className='text-2xl text-black dark:text-primary-content' />
            ) : (
              <IoMenu className='text-2xl text-black dark:text-primary-content' />
            )}
          </div>
          <ul
            tabIndex={0}
            //  dropdown-content
            className={` min-h-[91vh]
                             absolute mt-5 left-0 z-[50] p-2 border-r-2 border-gray-200 lg:hidden
             ${user ? "2xl:hidden" : "lg:hidden"}
                            ${open ? "" : "hidden"}
                             bg-base-100   w-52`}>
            {navLinks}
          </ul>
          {/* <ul
            tabIndex={0}
            //  dropdown-content
            className={`menu menu-sm
                             absolute mt-5 z-[50] p-2 shadow 
             ${user ? "2xl:hidden" : "lg:hidden"}
                            ${open ? "" : "hidden"}
                             bg-base-100 dark:bg-lime-100 rounded-b-xl w-52`}>
            {navLinks}
          </ul> */}
        </div>
        <Link to='/' className='flex gap-2 items-center'>
          <img className='w-auto h-7' src={logo} alt='logoComingSoon..' />
          <span className='font-bold text-xl md:text-3xl'>StudySphere</span>
        </Link>
      </div>
      <div
        className={` navbar-center hidden lg:flex
        ${user ? "2xl:flex" : "lg:flex"}`}>
        <ul className='menu menu-horizontal px-1'>{navLinks}</ul>
      </div>
      <div className='navbar-end'>
        <ul className='menu menu-horizontal px-1'>
          {!user && (
            <li>
              <NavLink
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    !isActive
                      ? "btn xl:text-lg font-semibold btn-ghost btn-outline border-green-400 rounded-lg text-black  mb-2  md:mr-1"
                      : "btn  btn-outline xl:text-lg border-x-0 border-t-0 text-[#23BE0A]  border-[#23BE0A] border-b-4 btn-ghost mb-2  md:mr-1"
                  } to={"/login"}>Login</NavLink>
            </li>
          )}
        </ul>
        {user && (
          <div className='dropdown dropdown-end z-50'>
            <div
              tabIndex={0}
              role='button'
              onClick={() => setOpen(false)}
              className='btn btn-ghost btn-circle avatar'>
              <div title={user?.displayName} className='w-10 rounded-full'>
                <img
                  referrerPolicy='no-referrer'
                  alt='User Profile Photo'
                  src={user?.photoURL || userDefaultPic}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'>
              <li>
                <NavLink
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    !isActive
                      ? "btn xl:text-lg font-semibold btn-outline btn-warning  rounded-lg text-black  mb-2  md:mr-1"
                      : "btn  btn-outline xl:text-lg border-x-0 border-t-0 text-[#23BE0A]  border-[#23BE0A] border-b-4 btn-ghost mb-2  md:mr-1"
                  }
                  to='/my-attempted-assignments'>
                  My Attempted Assignments
                </NavLink>
              </li>
              <li className='mt-2'>
                <button
                  onClick={logOut}
                  className='bg-gray-200 block text-center'>
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
