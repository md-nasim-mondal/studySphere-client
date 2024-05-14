import { useNavigate, useParams } from "react-router-dom";
import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import useAuth from "../hooks/useAuth";
import { Helmet } from "react-helmet";
import logo2 from "../assets/logo/study.svg";
import useAxiosSecure from "../hooks/useAxiosSecure";

const AssignmentDetails = () => {
  const { id } = useParams();
  const { user, loading } = useAuth() || {};
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const [assignment, setAssignment] = useState({});
  useEffect(() => {
    const getData = async () => {
      const { data } = await axiosSecure(`/assignment/${id}`);
      setAssignment(data);
    };
    getData();
  }, [axiosSecure, id]);
  const {
    _id,
    assignment_title,
    deadline,
    difficultyLevel,
    assignmentMark,
    thumbnailPhoto,
    description,
    assignmentCreator,
  } = assignment || {};
  const [isOpen, setIsOpen] = useState(false);
  const [userSubmittedAssignments, setUserSubmittedAssignments] = useState([]);

  useEffect(() => {
    if(user?.email){
      const getData = async () => {
        const { data } = await axiosSecure(
          `/submitted-assignments/${user?.email}`
        );
        setUserSubmittedAssignments(data);
      };
      getData();
    }
  }, [axiosSecure, setUserSubmittedAssignments, user]);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const handleTakeAssignment = () => {
    // const matched = user?.email === assignmentCreator?.email;
    const result = userSubmittedAssignments.find(
      (assign) => assign.assignmentId === _id
    );
    // if (matched) {
    //   return toast.error(
    //     "You Created the Assignment, So You cannot take this assignment!!"
    //   );
    // }
    if (result) {
      return toast.error(
        "You have Already Attempted This Assignment. You cannot Take This Assignment!!"
      );
    } else {
      openModal();
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const pdfLink = form.pdfLink.value;
    const note = form.noteText.value;
    const status = "Pending";
    const assignmentId = _id;
    const assignmentData = {
      assignmentId,
      assignment_title,
      deadline,
      difficultyLevel,
      assignmentMark,
      thumbnailPhoto,
      description,
      status,
      pdfLink,
      note,
      assignmentCreator,
      examineeUser: {
        email: user?.email,
        name: user?.displayName,
        photo: user?.photoURL,
      },
    };

    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/submitted-assignments`,
        assignmentData
      );
      toast.success("Assignment Attempted Successfully!");
      closeModal();
      navigate("/my-attempted-assignments");
    } catch (err) {
      toast.error(err.message);
    }
  };

  if (loading) {
    return (
      <div className=' flex mt-16 justify-center'>
        <span className='loading loading-infinity loading-lg'></span>
      </div>
    );
  }

  return (
    <div>
      <Helmet>
        <link rel='shortcut icon' href={logo2} type='image/svg+x-icon' />
        <title>StudySphere || AssignmentDetails</title>
      </Helmet>
      <div className='hero min-h-[80vh] my-24 bg-base-200 py-12 md:py-20 lg:py-24 rounded-lg'>
        <div className='hero-content block'>
          <h3 className='text-2xl md:text-3xl lg:text-5xl font-bold md:text-center pb-12'>
            Your Target Assignment Details
          </h3>
          <div className=' flex md:gap-6 lg:gap-10 flex-col lg:flex-row items-center'>
            <img
              src={thumbnailPhoto}
              className='md:max-w-md xl:max-w-lg rounded-lg shadow-2xl'
            />
            <div>
              <div>
                <h1 className=' text-xl md:text-3xl lg:text-5xl font-bold'>
                  {assignment_title}
                </h1>
                <p className='py-6'>{description}</p>
              </div>
              <p className='font-semibold text-xl text-info'>
                Assignment Mark: {assignmentMark}
              </p>
              <div className='flex  justify-between py-3'>
                <p className='text-lg font-semibold'>
                  Assignment Difficulty Level:{" "}
                  <span className='px-2 text-blue-800 uppercase bg-blue-200 rounded-full '>
                    {difficultyLevel}
                  </span>{" "}
                </p>
                <p className='font-semibold text-lg'>
                  Deadline:{" "}
                  <span className=' bg-red-200 px-1 text-red-500 rounded-lg'>
                    {new Date(deadline).toLocaleDateString()}
                  </span>
                </p>
              </div>
              <div className='py-4'>
                <h3 className='text-2xl md:text-4xl font-semibold'>
                  Assignment Creator Information:
                </h3>
                <div className='p-6 flex items-center justify-between flex-wrap'>
                  <div className='avatar'>
                    <div className='w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2'>
                      <img src={assignmentCreator?.photo} />
                    </div>
                  </div>
                  <div>
                    <p className='font-medium text-base leading-6 py-2'>
                      Name: {assignmentCreator?.name}
                    </p>
                    <p className='font-medium text-base leading-6'>
                      Email: {assignmentCreator?.email}
                    </p>
                  </div>
                </div>
              </div>
              <button
                onClick={handleTakeAssignment}
                className='btn btn-accent w-full'>
                Take Assignment
              </button>
            </div>
          </div>
        </div>
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as='div' className='relative z-10' onClose={closeModal}>
          <TransitionChild
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'>
            <div className='fixed inset-0 bg-black/25' />
          </TransitionChild>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <TransitionChild
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'>
                <DialogPanel className='w-full max-w-4xl transform overflow-y-auto rounded-2xl bg-base-200 p-6 text-left align-middle shadow-xl transition-all'>
                  <div className='md:p-8'>
                    <div className='text-end'>
                      <button
                        onClick={closeModal}
                        className='btn bg-red-500 text-black'>
                        Cancel Submit
                      </button>
                    </div>
                    <h1 className='text-4xl  font-bold text-center py-12'>
                      Submit Solved Of This Assignment
                    </h1>
                    <form onSubmit={handleFormSubmit}>
                      <div>
                        <div>
                          <label htmlFor='pdfLink'>PDF/DOC Link</label>
                          <input
                            id='pdfLink'
                            name='pdfLink'
                            type='url'
                            required
                            className='block w-full px-4 py-2 bg-white placeholder:text-black mt-2 text-gray-700  border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                          />
                        </div>

                        <div>
                          <label htmlFor='emailAddress'>Email Address</label>
                          <input
                            id='emailAddress'
                            type='email'
                            name='email'
                            disabled
                            defaultValue={user?.email}
                            className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                          />
                        </div>
                      </div>
                      <div className='flex flex-col gap-2 mt-4'>
                        <label htmlFor='noteText'>Note Text</label>
                        <textarea
                          required
                          className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                          name='noteText'
                          id='noteText'
                          cols='30'
                          rows='6'></textarea>
                      </div>
                      <div className='flex justify-end mt-6'>
                        <button
                          type='submit'
                          className='px-8 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600'>
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default AssignmentDetails;
