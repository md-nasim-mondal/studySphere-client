import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import toast from "react-hot-toast";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const Assignment = ({ assignment, assignments, setAssignments }) => {
  const { user } = useAuth() || {};
  const navigate = useLocation();
  const {
    _id,
    assignment_title,
    deadline,
    difficultyLevel,
    assignmentMark,
    thumbnailPhoto,
    // description,
    assignmentCreator,
  } = assignment || {};

  const handleDelete = async (id) => {
    if(!user) {
      navigate('/login')
      return toast.error('Please Login First than Try Again!!')
    }
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
            <Link to={`/update/${_id}`} className='btn btn-warning flex-1'>
              Update
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
    </div>
  );
};

Assignment.propTypes = {
  assignment: PropTypes.object,
  assignments: PropTypes.array,
  setAssignments: PropTypes.func,
};

export default Assignment;
