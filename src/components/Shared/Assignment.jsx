import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { Fragment, useState } from "react";
import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast from "react-hot-toast";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const Assignment = ({ assignment, assignments, setAssignments }) => {
  const { user } = useAuth() || {};
  const navigate = useNavigate();
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
  const [startDate, setStartDate] = useState(new Date(deadline) || new Date());

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const handleDelete = async (id) => {
    const verified = (await assignmentCreator?.email) === user?.email;
    if (!verified) {
      return toast.error(
        `You can't Delete this Assignment!! Only Creator Can Delete this Assignment!!`
      );
    } else if (verified) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          try {
            await axios.delete(
              `${import.meta.env.VITE_API_URL}/assignment/${id}`
            );
            toast.success("Delete Successful");

            // refresh the UI
            const remaining = assignments.filter((assign) => assign._id !== id);
            setAssignments(remaining);
          } catch (err) {
            toast.error(err.message);
          }
        }
      });
    }
  };

  const handleEdit = () => {
    if (!user) {
      toast.error(
        `Please Login than Try Again !! You can't Edit Without Login!`
      );
      return navigate('/login')
    } else if (user) {
      openModal();
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const assignment_title = form.assignment_title.value;
    const deadline = startDate;
    const difficultyLevel = form.difficultyLevel.value;
    const assignmentMark = parseFloat(form.assignmentMark.value);
    const thumbnailPhoto = form.thumbnailPhoto.value;
    const description = form.description.value;
    const jobData = {
      assignment_title,
      deadline,
      difficultyLevel,
      assignmentMark,
      thumbnailPhoto,
      description,
      assignmentCreator,
      lastUpdatedUser: {
        email: user?.email,
        name: user?.displayName,
        photo: user?.photoURL,
      },
    };

    try {
      await axios.put(
        `${import.meta.env.VITE_API_URL}/assignment/${_id}`,
        jobData
      );
      toast.success("Assignment Data Updated Successfully!");
      closeModal();
      navigate("/assignments");
    } catch (err) {
      toast.error(err.message);
    }
  };
  return (
    <div>
      <div className='card lg:flex-row items-center bg-base-100 shadow-xl px-4 py-6 gap-6 lg:gap-2'>
        <div className="lg:w-[55%]">
        <figure>
          <img
            src={thumbnailPhoto}
            alt='assignmentPhoto'
            className='rounded-xl'
          />
        </figure>
          <p className='font-semibold pt-4 text-sm'>
                  Deadline:{" "}
                  <span className=' bg-red-200 px-1 text-red-500 rounded-lg'>
                    {new Date(deadline).toLocaleDateString()}
                  </span>
                </p>
        </div>
        <div className='card-body p-0 items-center'>
          <h2 className='card-title'>{assignment_title}</h2>
          <div className='flex justify-between w-full'>
            <p className='font-semibold'>
             Assignment Mark:{" "}
              <span className=' bg-green-200 px-1 text-green-600 rounded-lg'>
                {assignmentMark}
              </span>
            </p>
            <p className='font-semibold text-end'>
              Difficulty Level:{" "}
              <span className='px-2 text-blue-800 uppercase bg-blue-200 rounded-full '>
                {difficultyLevel}
              </span>
            </p>
          </div>
          <div className='card-actions justify-between w-full'>
            <Link onClick={handleEdit} className='btn btn-warning flex-1'>
              Edit
            </Link>
            <Link
              onClick={() => handleDelete(_id)}
              className='btn btn-error flex-1'>
              Delete
            </Link>
          </div>
          <Link to={`/assignment/${_id}`} className='btn btn-info w-full'>
            View Details
          </Link>
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
                <DialogPanel className='w-full max-w-7xl transform overflow-y-auto rounded-2xl bg-base-200 p-6 text-left align-middle shadow-xl transition-all'>
                  <div className='md:p-8'>
                    <div className='text-end'>
                      <button onClick={closeModal} className='btn bg-red-500 text-black'>
                        Cancel Edit
                      </button>
                    </div>
                    <h1 className='text-4xl  font-bold text-center py-12'>
                      Update Assignment
                    </h1>
                    <form onSubmit={handleFormSubmit}>
                      <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
                        <div>
                          <label htmlFor='assignment_title'>
                            Assignment Title
                          </label>
                          <input
                            id='assignment_title'
                            name='assignment_title'
                            defaultValue={assignment_title}
                            type='text'
                            className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                          />
                        </div>

                        <div className='flex flex-col gap-2 '>
                          <label htmlFor='difficultyLevel'>
                            Assignment Difficulty Level
                          </label>
                          <select
                            name='difficultyLevel'
                            id='difficultyLevel'
                            defaultValue={difficultyLevel}
                            className='border p-2 rounded-md bg-white text-gray-700'>
                            <option value={difficultyLevel}>
                              {difficultyLevel}
                            </option>
                            <option value='Easy'>Easy</option>
                            <option value='Medium'>Medium</option>
                            <option value='Hard'>Hard</option>
                          </select>
                        </div>
                        <div>
                          <label htmlFor='assignmentMark'>
                            Assignment Mark
                          </label>
                          <input
                            id='assignmentMark'
                            defaultValue={assignmentMark}
                            name='assignmentMark'
                            type='number'
                            className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                          />
                        </div>

                        <div>
                          <label htmlFor='thumbnailPhoto'>
                            Thumbnail Image Photo URL
                          </label>
                          <input
                            id='thumbnailPhoto'
                            defaultValue={thumbnailPhoto}
                            name='thumbnailPhoto'
                            type='url'
                            className='block w-full px-4 py-2 bg-white placeholder:text-black mt-2 text-gray-700  border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                          />
                        </div>

                        <div className='flex flex-col gap-2 '>
                          <label>Assignment Deadline</label>

                          <DatePicker
                            className='border p-2 rounded-md w-full bg-white text-gray-700'
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                          />
                        </div>

                        <div>
                          <label htmlFor='emailAddress'>
                            Assignment Creator Email Address
                          </label>
                          <input
                            id='emailAddress'
                            type='email'
                            name='email'
                            disabled
                            defaultValue={assignmentCreator?.email}
                            className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                          />
                        </div>
                        <div>
                          <label htmlFor='currentUserEmailAddress'>
                            Present User Email Address
                          </label>
                          <input
                            id='currentUserEmailAddress'
                            type='email'
                            name='currentUserEmail'
                            disabled
                            defaultValue={user?.email}
                            className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                          />
                        </div>
                      </div>
                      <div className='flex flex-col gap-2 mt-4'>
                        <label htmlFor='description'>Description</label>
                        <textarea
                          defaultValue={description}
                          className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                          name='description'
                          id='description'
                          cols='30'
                          rows='10'></textarea>
                      </div>
                      <div className='flex justify-end mt-6'>
                        <button className='px-8 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600'>
                          Save
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

Assignment.propTypes = {
  assignment: PropTypes.object,
  assignments: PropTypes.array,
  setAssignments: PropTypes.func,
};

export default Assignment;
