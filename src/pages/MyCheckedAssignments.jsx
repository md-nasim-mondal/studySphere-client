import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";
const MyCheckedAssignments = () => {
  const {user} = useAuth() || {};

  const [assignments, setAssignments] = useState([]);
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    if (user?.email) {
      const getData = async () => {
        const { data } = await axiosSecure(`${import.meta.env.VITE_API_URL}/my-checked-assignments/${user?.email}`);
        setAssignments(data);
      };
      getData();
    }
  }, [axiosSecure, user, assignments]);
  if (assignments.length <= 0) {
    return (
      <div>
        <h3 className='text-3xl font-bold my-32 text-center'>
          {" "}
          Currently You have no Checked Or Marking Assignment.{" "}
        </h3>
      </div>
    );
  }
  return (
    <div>
       <div className='min-h-[68.5vh] overflow-auto py-24'>
      <h3 className='text-3xl font-bold my-12 text-center'>
          {" "}
          Here is Your Checked Assignments List Which was Checked or Marked by You.{" "}
        </h3>
        <table className='divide-x divide-y divide-yellow-500 overflow-auto  border-2 border-yellow-500 rounded-2xl mx-auto'>
          <thead className='bg-base-300'>
            <tr>
              <th
                scope='col'
                className='py-3.5 px-4 border-r-2 border-yellow-500  text-sm font-normal text-left rtl:text-right text-base-content'>
                <div className='flex items-center gap-x-3'>
                  <span>Assignment Title</span>
                </div>
              </th>
              <th
                scope='col'
                className='px-4 py-3.5  border-r-2 border-yellow-500  text-sm font-normal text-left rtl:text-right text-base-content'>
                <button className='flex items-center gap-x-2'>
                  <span className='w-28'>Assignment Mark</span>
                </button>
              </th>
              <th
                scope='col'
                className='px-4 py-3.5  border-r-2 border-yellow-500  text-sm font-normal text-left rtl:text-right text-base-content'>
                <button className='flex items-center gap-x-2'>
                  <span>Status</span>
                </button>
              </th>

              <th
                scope='col'
                className='px-4 py-3.5  border-r-2 border-yellow-500  text-sm font-normal text-left rtl:text-right text-base-content'>
                <span className='w-28'>Given Mark</span>
              </th>
              <th
                scope='col'
                className='px-4 py-3.5  border-r-2 border-yellow-500  text-sm font-normal text-left rtl:text-right text-base-content'>
                <button className='flex items-center gap-x-2'>
                  <span>Examinee Name</span>
                </button>
              </th>
              <th
                scope='col'
                className='px-4 py-3.5  border-r-2 border-yellow-500  text-sm font-normal text-left rtl:text-right text-base-content'>
                <button className='flex items-center gap-x-2'>
                  <span>Your Feedback</span>
                </button>
              </th>
            </tr>
          </thead>
          <tbody className='bg-base-200 divide-y divide-yellow-500 '>
            {assignments?.map((assignment) => (
              <tr key={assignment?._id} className='border-2 border-yellow-500'>
                <td className='px-4 py-4 border-r-2 border-yellow-500 text-sm text-base-content  whitespace-nowrap'>
                  {assignment?.assignment_title}
                </td>

                <td className='px-4 py-4  border-r-2 border-yellow-500  text-sm text-base-content  whitespace-nowrap'>
                  {assignment?.assignmentMark}
                </td>

                <td className=' text-center py-4 px-3  border-r-2 border-yellow-500  text-sm whitespace-nowrap'>
                  <span 
                    className={` ${
                      assignment.status === "Pending"
                        ? "bg-yellow-200 text-yellow-600"
                        : "bg-success text-success-content font-semibold"
                    } p-2 rounded-lg`}>
                    {assignment?.status}
                  </span>
                </td>

                <td className='px-4 py-4 border-r-2 border-yellow-500  text-sm text-base-content  whitespace-nowrap'>
                  {assignment?.obtainedMark || "-"}
                </td>
                <td className='px-4 py-4 border-r-2 border-yellow-500  text-sm whitespace-nowrap'>
                  <div className='flex items-center justify-center gap-x-6'>
                    {assignment?.examineeUser?.name || "-"}
                  </div>
                </td>
                <td className='px-4 py-4  border-r-2 border-yellow-500  text-sm whitespace-nowrap'>
                  <div className='flex items-center justify-center gap-x-6'>
                    {assignment?.feedback || "-"}
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

export default MyCheckedAssignments;