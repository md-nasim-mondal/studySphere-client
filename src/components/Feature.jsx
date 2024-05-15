import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import useAuth from "../hooks/useAuth";

const Feature = () => {
  const { theme } = useAuth() || {};
  return (
    <div>
      <section
        className={`${
          theme === "light" ? "bg-white" : "bg-gray-900"
        } rounded-2xl my-12 `}>
        <div className='container px-6 py-10 mx-auto'>
          <h1
            className={`text-2xl font-semibold text-center ${
              theme !== "light" ? "text-white" : "text-gray-800"
            } capitalize lg:text-3xl`}>
            explore our <br /> awesome{" "}
            <span className='text-blue-500'>Features</span>
          </h1>

          <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3'>
            <div
              className={`flex flex-col items-center p-6 space-y-3 text-center ${
                theme === "light" ? " bg-gray-100" : "bg-gray-800"
              }  rounded-xl `}>
              <span
                className={`inline-block p-3 text-white bg-green-500 rounded-full `}>
                <IoCheckmarkDoneCircleSharp />
              </span>

              <h1
                className={`text-xl font-semibold ${
                  theme === "light" ? "text-gray-700" : "text-white"
                }  capitalize `}>
                Effortless Assignment Management
              </h1>

              <p
                className={`${
                  theme === "light" ? "text-gray-500 " : "text-gray-300"
                }`}>
                Delve into a realm of simplicity and efficiency with
                AssignmentEase by StudySphere. Our platform empowers users to
                effortlessly create, submit, update, and grade assignments. Say
                goodbye to cumbersome processes and hello to streamlined
                academic management.
              </p>

              <a
                href='#'
                className={`flex items-center -mx-1 text-sm ${
                  theme === "light"
                    ? "text-blue-500  hover:text-blue-600 "
                    : "hover:text-blue-500 text-blue-400 "
                }  capitalize transition-colors duration-300 transform  hover:underline `}>
                <span className='mx-1'>read more</span>
                <svg
                  className='w-4 h-4 mx-1 rtl:-scale-x-100'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    fillRule='evenodd'
                    d='M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z'
                    clipRule='evenodd'></path>
                </svg>
              </a>
            </div>
            <div
              className={`flex flex-col items-center p-6 space-y-3 text-center ${
                theme === "light" ? " bg-gray-100" : "bg-gray-800"
              }  rounded-xl `}>
              <span
                className={`inline-block p-3 text-white bg-green-500 rounded-full `}>
                <IoCheckmarkDoneCircleSharp />
              </span>

              <h1
                className={`text-xl font-semibold ${
                  theme === "light" ? "text-gray-700" : "text-white"
                }  capitalize `}>
                Professional Assignment Solutions
              </h1>

              <p
                className={`${
                  theme === "light" ? "text-gray-500 " : "text-gray-300"
                }`}>
                Elevate your academic journey with AssignPro, StudySphere&apos;s
                premier platform for assignment management. Catering to the
                needs of educators and students alike, AssignPro provides a
                professional-grade solution for seamless assignment creation,
                submission, updates, and grading.
              </p>

              <a
                href='#'
                className={`flex items-center -mx-1 text-sm ${
                  theme === "light"
                    ? "text-blue-500  hover:text-blue-600 "
                    : "hover:text-blue-500 text-blue-400 "
                }  capitalize transition-colors duration-300 transform  hover:underline `}>
                <span className='mx-1'>read more</span>
                <svg
                  className='w-4 h-4 mx-1 rtl:-scale-x-100'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    fillRule='evenodd'
                    d='M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z'
                    clipRule='evenodd'></path>
                </svg>
              </a>
            </div>
            <div
              className={`flex flex-col items-center p-6 space-y-3 text-center ${
                theme === "light" ? " bg-gray-100" : "bg-gray-800"
              }  rounded-xl `}>
              <span
                className={`inline-block p-3 text-white bg-green-500 rounded-full `}>
                <IoCheckmarkDoneCircleSharp />
              </span>

              <h1
                className={`text-xl font-semibold ${
                  theme === "light" ? "text-gray-700" : "text-white"
                }  capitalize `}>
                Smart Assignment Solutions
              </h1>

              <p
                className={`${
                  theme === "light" ? "text-gray-500 " : "text-gray-300"
                }`}>
                Unlock the power of intelligent assignment management with
                AssignWise on StudySphere. Designed to optimize productivity and
                organization, AssignWise offers smart solutions for creating,
                submitting, and grading assignments efficiently.
              </p>

              <a
                href='#'
                className={`flex items-center -mx-1 text-sm ${
                  theme === "light"
                    ? "text-blue-500  hover:text-blue-600 "
                    : "hover:text-blue-500 text-blue-400 "
                }  capitalize transition-colors duration-300 transform  hover:underline `}>
                <span className='mx-1'>read more</span>
                <svg
                  className='w-4 h-4 mx-1 rtl:-scale-x-100'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    fillRule='evenodd'
                    d='M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z'
                    clipRule='evenodd'></path>
                </svg>
              </a>
            </div>
            <div
              className={`flex flex-col items-center p-6 space-y-3 text-center ${
                theme === "light" ? " bg-gray-100" : "bg-gray-800"
              }  rounded-xl `}>
              <span
                className={`inline-block p-3 ${
                  theme === "light"
                    ? "text-blue-500  bg-blue-100 "
                    : "text-white bg-blue-500"
                } rounded-full `}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-6 h-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01'
                  />
                </svg>
              </span>

              <h1
                className={`text-xl font-semibold ${
                  theme === "light" ? "text-gray-700" : "text-white"
                }  capitalize `}>
                Customized Policies
              </h1>

              <p
                className={`${
                  theme === "light" ? "text-gray-500 " : "text-gray-300"
                }`}>
                Discover tailored policies designed to fit your unique
                requirements with Customized Policies. From insurance to
                business protocols, our flexible solutions ensure optimal
                alignment with your goals and preferences, empowering you to
                navigate confidently in any domain.
              </p>

              <a
                href='#'
                className={`flex items-center -mx-1 text-sm ${
                  theme === "light"
                    ? "text-blue-500  hover:text-blue-600 "
                    : "hover:text-blue-500 text-blue-400 "
                }  capitalize transition-colors duration-300 transform  hover:underline `}>
                <span className='mx-1'>read more</span>
                <svg
                  className='w-4 h-4 mx-1 rtl:-scale-x-100'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    fillRule='evenodd'
                    d='M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z'
                    clipRule='evenodd'></path>
                </svg>
              </a>
            </div>

            <div
              className={`flex flex-col items-center p-6 space-y-3 text-center ${
                theme === "light" ? " bg-gray-100" : "bg-gray-800"
              }  rounded-xl `}>
              <span
                className={`inline-block p-3 ${
                  theme === "light"
                    ? "text-blue-500  bg-blue-100 "
                    : "text-white bg-blue-500"
                } rounded-full `}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-6 h-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4'
                  />
                </svg>
              </span>

              <h1
                className={`text-xl font-semibold ${
                  theme === "light" ? "text-gray-700" : "text-white"
                }  capitalize `}>
                Network of Trusted Partners
              </h1>

              <p
                className={`${
                  theme === "light" ? "text-gray-500 " : "text-gray-300"
                }`}>
                Explore a robust Network of Trusted Partners where reliability
                meets excellence. Our carefully curated network ensures access
                to dependable professionals and businesses across various
                industries, fostering collaborative success and peace of mind in
                every endeavor.
              </p>

              <a
                href='#'
                className={`flex items-center -mx-1 text-sm ${
                  theme === "light"
                    ? "text-blue-500  hover:text-blue-600 "
                    : "hover:text-blue-500 text-blue-400 "
                }  capitalize transition-colors duration-300 transform  hover:underline `}>
                <span className='mx-1'>read more</span>
                <svg
                  className='w-4 h-4 mx-1 rtl:-scale-x-100'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    fillRule='evenodd'
                    d='M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z'
                    clipRule='evenodd'></path>
                </svg>
              </a>
            </div>

            <div
              className={`flex flex-col items-center p-6 space-y-3 text-center ${
                theme === "light" ? " bg-gray-100" : "bg-gray-800"
              }  rounded-xl `}>
              <span
                className={`inline-block p-3 ${
                  theme === "light"
                    ? "text-blue-500  bg-blue-100 "
                    : "text-white bg-blue-500"
                } rounded-full `}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-6 h-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z'
                  />
                </svg>
              </span>

              <h1
                className={`text-xl font-semibold ${
                  theme === "light" ? "text-gray-700" : "text-white"
                }  capitalize `}>
                Exceptional Customer Service
              </h1>

              <p
                className={`${
                  theme === "light" ? "text-gray-500 " : "text-gray-300"
                }`}>
                Experience unparalleled care and attention with our Exceptional
                Customer Service. Our dedicated team is committed to exceeding
                your expectations, providing prompt assistance, personalized
                solutions, and a seamless experience every step of the way,
                ensuring your satisfaction is our top priority.
              </p>

              <a
                href='#'
                className={`flex items-center -mx-1 text-sm ${
                  theme === "light"
                    ? "text-blue-500  hover:text-blue-600 "
                    : "hover:text-blue-500 text-blue-400 "
                }  capitalize transition-colors duration-300 transform  hover:underline `}>
                <span className='mx-1'>read more</span>
                <svg
                  className='w-4 h-4 mx-1 rtl:-scale-x-100'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    fillRule='evenodd'
                    d='M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z'
                    clipRule='evenodd'></path>
                </svg>
              </a>
            </div>
          </div>
          <div className='text-center my-8'>
            <button className='btn btn-accent'>Explore More Features</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Feature;
