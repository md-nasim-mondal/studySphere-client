
import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { Helmet } from "react-helmet";
import useAxiosSecure from "../hooks/useAxiosSecure";

const MyAttemptedAssignments = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [attemptedAssignments, setAttemptedAssignments] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const { data } = await axiosSecure(
        `/submitted-assignments/${user?.email}`
      );
      setAttemptedAssignments(data);
    };
    getData();
  }, [user, attemptedAssignments, axiosSecure]);

  if (attemptedAssignments.length <= 0) {
    return (
      <div>
        <h3 className='text-3xl font-bold my-32 text-center'>
          {" "}
          Currently You have no attempted Assignment.{" "}
        </h3>
      </div>
    );
  }

  return (
    <div className='min-h-[68.5vh]'>
      <Helmet>
        <title>StudySphere || MyAttemptedAssignment</title>
      </Helmet>
      <div className='min-h-[68.5vh] overflow-auto py-24'>
        <table className='divide-x divide-y divide-green-500 overflow-auto  border-2 border-green-500 rounded-2xl mx-auto'>
          <thead className='bg-base-300'>
            <tr>
              <th
                scope='col'
                className='py-3.5 px-4 border-r-2 border-green-500  text-sm font-normal text-left rtl:text-right text-base-content'>
                <div className='flex items-center gap-x-3'>
                  <span>Assignment Title</span>
                </div>
              </th>
              <th
                scope='col'
                className='px-4 py-3.5  border-r-2 border-green-500  text-sm font-normal text-left rtl:text-right text-base-content'>
                <button className='flex items-center gap-x-2'>
                  <span className='w-28'>Assignment Mark</span>
                </button>
              </th>
              <th
                scope='col'
                className='px-4 py-3.5  border-r-2 border-green-500  text-sm font-normal text-left rtl:text-right text-base-content'>
                <button className='flex items-center gap-x-2'>
                  <span>Status</span>
                </button>
              </th>

              <th
                scope='col'
                className='px-4 py-3.5  border-r-2 border-green-500  text-sm font-normal text-left rtl:text-right text-base-content'>
                <span className='w-28'>Obtained Mark</span>
              </th>
              <th
                scope='col'
                className='px-4 py-3.5  border-r-2 border-green-500  text-sm font-normal text-left rtl:text-right text-base-content'>
                <button className='flex items-center gap-x-2'>
                  <span>Examiner Name</span>
                </button>
              </th>
              <th
                scope='col'
                className='px-4 py-3.5  border-r-2 border-green-500  text-sm font-normal text-left rtl:text-right text-base-content'>
                <button className='flex items-center gap-x-2'>
                  <span>Examiner Feedback</span>
                </button>
              </th>
            </tr>
          </thead>
          <tbody className='bg-base-200 divide-y divide-green-500 '>
            {attemptedAssignments?.map((assignment) => (
              <tr key={assignment?._id} className='border-2 border-green-500'>
                <td className='px-4 py-4 border-r-2 border-green-500 text-sm text-base-content  whitespace-nowrap'>
                  {assignment?.assignment_title}
                </td>

                <td className='px-4 py-4  border-r-2 border-green-500  text-sm text-base-content  whitespace-nowrap'>
                  {assignment?.assignmentMark}
                </td>

                <td className=' text-center py-4 px-3  border-r-2 border-green-500  text-sm whitespace-nowrap'>
                  <span className=' bg-yellow-200 text-yellow-600 p-2 rounded-lg'>
                    {assignment?.status}
                  </span>
                </td>

                <td className='px-4 py-4 border-r-2 border-green-500  text-sm text-base-content  whitespace-nowrap'>
                  {assignment?.obtainedMark || "-"}
                </td>
                <td className='px-4 py-4 border-r-2 border-green-500  text-sm whitespace-nowrap'>
                  <div className='flex items-center justify-center gap-x-6'>
                    {assignment?.Examiner?.name || "-"}
                  </div>
                </td>
                <td className='px-4 py-4  border-r-2 border-green-500  text-sm whitespace-nowrap'>
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

export default MyAttemptedAssignments;
