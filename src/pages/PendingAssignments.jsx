import axios from "axios";
import { Fragment, useEffect } from "react";
import { useState } from "react";
import { FaMarker } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";

const PendingAssignments = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [pendingAssignments, setPendingAssignments] = useState([]);
  const [markingAssignment, setMarkingAssignment] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios(
        `${import.meta.env.VITE_API_URL}/pending-assignments/Pending`
      );
      setPendingAssignments(data);
    };
    getData();
  }, [setPendingAssignments, pendingAssignments]);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const handleMarking = async () => {
    openModal();
  };
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const matched =
      (await user?.email) === markingAssignment?.examineeUser?.email;
    if (matched) {
      closeModal();
      return toast.error(
        "You gave this exam. So you cannot give mark for this assignment !! "
      );
    }
    const form = e.target;
    const feedback = form.feedback.value;
    const obtainedMark = parseFloat(form.mark.value);
    const status = "Completed";
    const assignmentMark = markingAssignment?.assignmentMark;
    if(obtainedMark > assignmentMark) {
      return toast.error('Obtained Mark cannot be bigger than Assignment Mark!! ')
    }else if (obtainedMark < 0 ) {
      return toast.error('Obtained mark cannot be minus number!!!')
    }
    const assignmentUpdateData = {
      feedback,
      obtainedMark,
      status,
      Examiner: {
        email: user?.email,
        name: user?.displayName,
        photo: user?.photoURL,
      },
    };

    try {
      await axios.put(
        `${import.meta.env.VITE_API_URL}/submitted-assignment/${
          markingAssignment?._id
        }`,
        assignmentUpdateData
      );
      toast.success("Assignment Checked Successfully With Mark!!");
      closeModal();
      navigate("/pendingAssignments");
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className='mx-auto'>
    <Helmet>
        <title>StudySphere || PendingAssignments</title>
      </Helmet>
      <div className='min-h-[68.5vh] overflow-auto py-24'>
        <table className='divide-x divide-y divide-gray-500 overflow-auto  border-2 border-gray-500 rounded-2xl mx-auto'>
          <thead className='bg-base-300'>
            <tr>
              <th
                scope='col'
                className='py-3.5 px-4 border-r-2 border-gray-500  text-sm font-normal text-left rtl:text-right text-base-content'>
                <div className='flex items-center gap-x-3'>
                  <span>Assignment Title</span>
                </div>
              </th>
              <th
                scope='col'
                className='px-4 py-3.5  border-r-2 border-gray-500  text-sm font-normal text-left rtl:text-right text-base-content'>
                <button className='flex items-center gap-x-2'>
                  <span className='w-28'>Assignment Mark</span>
                </button>
              </th>
              <th
                scope='col'
                className='px-4 py-3.5  border-r-2 border-gray-500  text-sm font-normal text-left rtl:text-right text-base-content'>
                <button className='flex items-center gap-x-2'>
                  <span>Examinee Name</span>
                </button>
              </th>
              <th
                scope='col'
                className='px-4 py-3.5  border-r-2 border-gray-500  text-sm font-normal text-left rtl:text-right text-base-content'>
                <button className='flex items-center gap-x-2'>
                  <span>Status</span>
                </button>
              </th>
              <th
                scope='col'
                className='px-4 py-3.5  border-r-2 border-gray-500  text-sm font-normal text-left rtl:text-right text-base-content'>
                <button className='flex items-center gap-x-2'>
                  <span>Assignment Details</span>
                </button>
              </th>
              <th
                scope='col'
                className='px-4 py-3.5  border-r-2 border-gray-500  text-sm font-normal text-left rtl:text-right text-base-content'>
                <span className='w-28'>Check & Give Mark</span>
              </th>
              <th
                scope='col'
                className='px-4 py-3.5  border-r-2 border-gray-500  text-sm font-normal text-left rtl:text-right text-base-content'>
                <span className='w-28'>Pdf/Doc file Link Preview</span>
              </th>
            </tr>
          </thead>
          <tbody className='bg-base-200 divide-y divide-gray-500 '>
            {pendingAssignments?.map((assignment) => (
              <tr key={assignment?._id} className='border-2 border-gray-500'>
                <td className='px-4 py-4 border-r-2 border-gray-500 text-sm text-base-content  whitespace-nowrap'>
                  {assignment?.assignment_title}
                </td>

                <td className='px-4 py-4  border-r-2 border-gray-500  text-sm text-base-content  whitespace-nowrap'>
                  {assignment?.assignmentMark}
                </td>

                <td className='px-4 py-4 border-r-2 border-gray-500  text-sm text-base-content  whitespace-nowrap'>
                  {assignment?.examineeUser?.name}
                </td>
                <td className=' text-center py-4 px-3  border-r-2 border-gray-500  text-sm whitespace-nowrap'>
                  <span className=' bg-yellow-200 text-yellow-600 p-2 rounded-lg'>
                    {assignment?.status}
                  </span>
                </td>
                <td className='px-4 py-4 border-r-2 border-gray-500  text-sm whitespace-nowrap'>
                  <div className='flex items-center justify-center gap-x-6'>
                    <Link
                      to={`/assignment/${assignment?.assignmentId}`}
                      className='btn btn-info  transition-colors duration-200   hover:text-yellow-500 focus:outline-none'>
                      See Details
                    </Link>
                  </div>
                </td>
                <td className='px-4 py-4  border-r-2 border-gray-500  text-sm whitespace-nowrap'>
                  <div className='flex items-center justify-center gap-x-6'>
                    <button
                      onClick={() => {
                        setMarkingAssignment(assignment);
                        handleMarking();
                      }}
                      className='btn btn-accent  text-base-content transition-colors duration-200   hover:text-yellow-500 focus:outline-none'>
                      <FaMarker />
                    </button>
                  </div>
                </td>

                <td className="p-2">
                  <iframe
                    src={assignment?.pdfLink}
                    className='rounded-lg'></iframe>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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
                  <div className='md:p-8 overflow-auto h-[80vh]'>
                    <div className='text-end'>
                      <button
                        onClick={closeModal}
                        className='btn bg-red-500 text-black'>
                        Cancel Marking
                      </button>
                    </div>
                    <h1 className='text-4xl  font-bold text-center py-12'>
                      Please Check & Marking the Assignment.
                    </h1>
                    <div className='py-12'>
                      <h3 className='text-2xl font-semibold'>
                        Assignment Documents Which is Submitted by Examinee:{" "}
                      </h3>
                      <div className='pl-8'>
                        <h4 className='text-2xl font-medium py-3'>
                          Pdf/Doc File Link Preview
                        </h4>
                        <a href={markingAssignment?.pdfLink} target='_blank'>
                          <iframe src={markingAssignment?.pdfLink}></iframe>
                        </a>
                      </div>
                      <div className='pl-8 text-lg'>
                        <p className='font-semibold py-3'>
                          <span>Pdf/Docs File Link: </span>
                          <a
                            className='text-blue-400'
                            href={markingAssignment?.pdfLink}
                            target='_blank'>
                            {markingAssignment?.pdfLink}
                          </a>
                        </p>
                        <p className='font-semibold pb-3'>
                          Note: {markingAssignment?.note}{" "}
                        </p>
                      </div>
                    </div>
                    <form onSubmit={handleFormSubmit}>
                      <div>
                        <div>
                          <label htmlFor='emailAddress'>
                            Your Email Address
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

                        <div>
                          <label htmlFor='mark'>Give Mark</label>
                          <input
                            id='mark'
                            name='mark'
                            type='number'
                            placeholder='Give mark here'
                            className='block w-full px-4 py-2 bg-white placeholder:text-black mt-2 text-gray-700  border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                          />
                        </div>
                      </div>
                      <div className='flex flex-col gap-2 mt-4'>
                        <label htmlFor='feedback'>Feedback</label>
                        <textarea
                          required
                          placeholder='Give Your Feedback Here....'
                          className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                          name='feedback'
                          id='feedback'
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

export default PendingAssignments;
