import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { FaMarker } from "react-icons/fa";
import { Link } from "react-router-dom";

const PendingAssignments = () => {
  const [pendingAssignments, setPendingAssignments] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios(
        `${import.meta.env.VITE_API_URL}/pending-assignments/Pending`
      );
      setPendingAssignments(data);
    };
    getData();
  }, [setPendingAssignments, pendingAssignments]);

  // console.log(pendingAssignments);
  return (
    <div className="mx-auto">
      <div className="flex flex-col my-24 items-center">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-200 md:rounded-lg">
              <table className="divide-y divide-gray-200">
                <thead className="bg-base-300">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-base-content">
                      <div className="flex items-center gap-x-3">
                        <span>Assignment Title</span>
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-base-content">
                      <button className="flex items-center gap-x-2">
                        <span className="w-28">Assignment Mark</span>
                      </button>
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-base-content">
                      <button className="flex items-center gap-x-2">
                        <span>Examinee Name</span>
                      </button>
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-base-content">
                      <button className="flex items-center gap-x-2">
                        <span>Status</span>
                      </button>
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-base-content">
                      <button className="flex items-center gap-x-2">
                        <span>Assignment Details</span>
                      </button>
                    </th>
                    <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-base-content">
                      Give Mark
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-base-200 divide-y divide-gray-200 ">
                  {pendingAssignments?.map((assignment) => (
                    <tr key={assignment?._id}>
                      <td className="px-4 py-4 text-sm text-base-content  whitespace-nowrap">
                        {assignment?.assignment_title}
                      </td>

                      <td className="px-4 py-4 text-sm text-base-content  whitespace-nowrap">
                        {assignment?.assignmentMark}
                      </td>

                      <td className="px-4 py-4 text-sm text-base-content  whitespace-nowrap">
                        {assignment?.submittedUser?.name}
                      </td>
                      <td className=" text-center py-4 text-sm whitespace-nowrap">
                        <span className=" bg-yellow-200 text-yellow-600 p-2 rounded-lg">

                        {assignment?.status}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <div className="flex items-center justify-center gap-x-6">
                          <Link
                            to={`/assignment/${assignment?.assignmentId}`}
                            className="btn btn-info  transition-colors duration-200   hover:text-yellow-500 focus:outline-none">
                            See Details
                          </Link>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <div className="flex items-center justify-center gap-x-6">
                          <button
                            className="text-base-content transition-colors duration-200   hover:text-yellow-500 focus:outline-none">
                            <FaMarker />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PendingAssignments;