import { useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Helmet } from "react-helmet";
import useAxiosSecure from "../hooks/useAxiosSecure";

const UpdateAssignment = () => {
  const { user } = useAuth() || {};
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const loadedAssignment = useLoaderData();
  const [assignment, setAssignment] = useState(loadedAssignment);
  useEffect(()=> {
    setAssignment(loadedAssignment)
  }, [setAssignment, loadedAssignment, assignment])
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
  const [startDate, setStartDate] = useState(new Date(deadline) || new Date());
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const assignment_title = form.assignment_title.value;
    const deadline = startDate;
    const difficultyLevel = form.difficultyLevel.value;
    const assignmentMark = parseFloat(form.assignmentMark.value);
    const thumbnailPhoto = form.thumbnailPhoto.value;
    const description = form.description.value;
    const assignmentData = {
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
      await axiosSecure.put(
        `/assignment/${_id}`,
        assignmentData
      );
      toast.success("Assignment Data Updated Successfully!");
      navigate("/assignments");
    } catch (err) {
      toast.error(err.message);
    }
  };
  return (
    <div>
    <Helmet>
        <title>StudySphere || UpdateAssignmentDetails</title>
      </Helmet>
    <div className="bg-base-200 px-12">

      <h1 className='text-4xl  font-bold text-center py-12'>
        Update Assignment
      </h1>
      <form onSubmit={handleFormSubmit}>
        <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
          <div>
            <label htmlFor='assignment_title'>Assignment Title</label>
            <input
              id='assignment_title'
              name='assignment_title'
              defaultValue={assignment_title}
              required
              type='text'
              className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
            />
          </div>

          <div className='flex flex-col gap-2 '>
            <label htmlFor='difficultyLevel'>Assignment Difficulty Level</label>
            <select
              name='difficultyLevel'
              id='difficultyLevel'
              defaultValue={difficultyLevel}
              className='border p-2 rounded-md bg-white text-gray-700'>
              <option value={difficultyLevel}>{difficultyLevel}</option>
              <option value='Easy'>Easy</option>
              <option value='Medium'>Medium</option>
              <option value='Hard'>Hard</option>
            </select>
          </div>
          <div>
            <label htmlFor='assignmentMark'>Assignment Mark</label>
            <input
              id='assignmentMark'
              defaultValue={assignmentMark}
              name='assignmentMark'
              type='number'
              required
              className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
            />
          </div>

          <div>
            <label htmlFor='thumbnailPhoto'>Thumbnail Image Photo URL</label>
            <input
              id='thumbnailPhoto'
              defaultValue={thumbnailPhoto}
              name='thumbnailPhoto'
              type='url'
              required
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
            required
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
    </div>
  );
};

export default UpdateAssignment;
