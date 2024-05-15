import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import { Button } from "@headlessui/react";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const MyCreatedAssignments = () => {
  const { user } = useAuth() || {};
  const [assignments, setAssignments] = useState([]);
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    if (user?.email) {
      const getData = async () => {
        const { data } = await axiosSecure(`/assignments/${user?.email}`);
        setAssignments(data);
      };
      getData();
    }
  }, [axiosSecure, user, assignments]);
  const handleDelete = async (id) => {
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
          await axiosSecure.delete(`/assignment/${id}`);
          toast.success("Delete Successful");

          // refresh the UI
          const remaining = assignments.filter((assign) => assign._id !== id);
          setAssignments(remaining);
        } catch (err) {
          toast.error(err.message);
        }
      }
    });
  };
  if (assignments.length <= 0) {
    return (
      <div>
        <h3 className='text-3xl font-bold my-32 text-center'>
          {" "}
          Currently You have NO Created Assignments.{" "}
        </h3>
      </div>
    );
  }

  return (
    <div className='min-h-[68.5vh]'>
      <Helmet>
        <title>StudySphere || MyCreatedAssignments</title>
      </Helmet>
      <div className='min-h-[68.5vh] overflow-auto py-24'>
      <h3 className='text-3xl font-bold my-12 text-center'>
          {" "}
          Here is Your Created Assignments List.{" "}
        </h3>
        <table className='divide-x divide-y divide-blue-500 overflow-auto  border-2 border-blue-500 rounded-2xl mx-auto'>
          <thead className='bg-base-300'>
            <tr>
              <th
                scope='col'
                className='py-3.5 px-4 border-r-2 border-blue-500  text-sm font-normal text-left rtl:text-right text-base-content'>
                <div className='flex items-center gap-x-3'>
                  <span>Assignment Title</span>
                </div>
              </th>
              <th
                scope='col'
                className='px-4 py-3.5  border-r-2 border-blue-500  text-sm font-normal text-left rtl:text-right text-base-content'>
                <button className='flex items-center gap-x-2'>
                  <span className='w-28'>Assignment Mark</span>
                </button>
              </th>
              <th
                scope='col'
                className='px-4 py-3.5  border-r-2 border-blue-500  text-sm font-normal text-left rtl:text-right text-base-content'>
                <span className='w-28'>Assignment Take</span>
              </th>
              <th
                scope='col'
                className='px-4 py-3.5  border-r-2 border-blue-500  text-sm font-normal text-left rtl:text-right text-base-content'>
                <Button className='flex items-center gap-x-2'>
                  <span>Edit</span>
                </Button>
              </th>
              <th
                scope='col'
                className='px-4 py-3.5  border-r-2 border-blue-500  text-sm font-normal text-left rtl:text-right text-base-content'>
                <button className='flex items-center gap-x-2'>
                  <span>Delete</span>
                </button>
              </th>
            </tr>
          </thead>
          <tbody className='bg-base-200 divide-y divide-blue-500 '>
            {assignments?.map((assignment) => (
              <tr key={assignment?._id} className='border-2 border-blue-500'>
                <td className='px-4 py-4 border-r-2 border-blue-500 text-sm text-base-content  whitespace-nowrap'>
                  {assignment?.assignment_title}
                </td>

                <td className='px-4 py-4  border-r-2 border-blue-500  text-sm text-base-content  whitespace-nowrap'>
                  {assignment?.assignmentMark}
                </td>

                <td className='px-4 py-4 border-r-2 border-blue-500  text-sm text-base-content  whitespace-nowrap'>
                  {assignment?.assignmentTakeCount || 0}
                </td>
                <td className='px-4 py-4 border-r-2 border-blue-500  text-sm whitespace-nowrap'>
                  <div className='flex items-center justify-center gap-x-6'>
                    <Link
                      to={`/update/${assignment?._id}`}
                      className='btn btn-warning'>
                      Edit
                    </Link>
                  </div>
                </td>
                <td className='px-4 py-4  border-r-2 border-blue-500  text-sm whitespace-nowrap'>
                  <div className='flex items-center justify-center gap-x-6'>
                    <button
                      onClick={() => handleDelete(assignment?._id)}
                      className='btn btn-error'>
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCreatedAssignments;
