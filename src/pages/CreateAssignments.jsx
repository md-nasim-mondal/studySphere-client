import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useAuth from "../hooks/useAuth";
import { Helmet } from "react-helmet";
import { Typewriter } from "react-simple-typewriter";
import useAxiosSecure from "../hooks/useAxiosSecure";
const CreateAssignments = () => {
  const { user } = useAuth() || {};
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState(new Date());
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const assignment_title = form.assignment_title.value;
    const email = form.email.value;
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
      assignmentCreator: {
        email,
        name: user?.displayName,
        photo: user?.photoURL,
      },
    };
    try {
      await axiosSecure.post(
        `/assignments`,
        assignmentData
      );
      toast.success("Assignment Create Successfully!");
      navigate("/my-created-assignments");
    } catch (err) {
      toast.error(err.message);
    }
  };
  return (
    <div>
      <Helmet>
        <title>StudySphere || CreateAssignment</title>
      </Helmet>
      <div className='flex justify-center text-green-500 items-center my-12 text-[42px] '>
        <Typewriter
          words={["Create", "A", "New", "Assignments", "Here"]}
          loop={true}
          cursor
          cursorStyle='~'
          typeSpeed={170}
          deleteSpeed={80}
          delaySpeed={1200}
          style={{ fontSize: "24px" }} // Increase the text size
        />
      </div>
      <div className='flex justify-center items-center my-12'>
        <section className=' p-2 md:p-6 mx-auto bg-white rounded-md shadow-md md:w-[800px] '>
          <h2 className='text-xl md:text-4xl font-semibold text-gray-700 capitalize text-center my-12 '>
            Create A New Assignment
          </h2>
          <form onSubmit={handleFormSubmit}>
            <div className='grid grid-cols-1 gap-6 mt-4 md:grid-cols-2'>
              <div>
                <label className='text-gray-700 ' htmlFor='assignment_title'>
                  Assignment Title
                </label>
                <input
                  id='assignment_title'
                  name='assignment_title'
                  placeholder='Write Your Assignment Title Here.'
                  type='text'
                  className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                />
              </div>

              <div className='flex flex-col gap-2 '>
                <label className='text-gray-700 ' htmlFor='difficultyLevel'>
                  Assignment Difficulty Level
                </label>
                <select
                  name='difficultyLevel'
                  id='difficultyLevel'
                  className='border p-2 rounded-md'>
                  <option value='Easy'>Easy</option>
                  <option value='Medium'>Medium</option>
                  <option value='Hard'>Hard</option>
                </select>
              </div>
              <div>
                <label className='text-gray-700 ' htmlFor='assignmentMark'>
                  Assignment Mark
                </label>
                <input
                  id='assignmentMark'
                  name='assignmentMark'
                  placeholder='Write Your Assignment Require Mark'
                  type='number'
                  className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                />
              </div>

              <div>
                <label className='text-gray-700 ' htmlFor='thumbnailPhoto'>
                  Thumbnail Image URL
                </label>
                <input
                  id='thumbnailPhoto'
                  name='thumbnailPhoto'
                  type='url'
                  placeholder='Give Thumbnail Photo URL of Your Assignment'
                  className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                />
              </div>

              <div className='flex flex-col gap-2 '>
                <label className='text-gray-700'>Due Date</label>

                {/* Date Picker Input Field */}
                <DatePicker
                  className='border p-2 rounded-md w-full'
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
              </div>

              <div>
                <label className='text-gray-700 ' htmlFor='emailAddress'>
                  Email Address
                </label>
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
              <label className='text-gray-700 ' htmlFor='description'>
                Description
              </label>
              <textarea
                placeholder='Write Your Assignment Description Here......'
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                name='description'
                rows={8}
                id='description'></textarea>
            </div>
            <div className='flex justify-end mt-6'>
              <button
                type='submit'
                className='px-8 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600'>
                Create
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default CreateAssignments;
