import { useLoaderData } from "react-router-dom";

const AssignmentDetails = () => {
  const assignment = useLoaderData();
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
  return (
    <div>
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
                <h1 className=' text-xl md:text-3xl lg:text-5xl font-bold'>{assignment_title}</h1>
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
                      <img src={assignmentCreator.photo} />
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
              <button className='btn btn-accent w-full'>Take Assignment</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignmentDetails;
