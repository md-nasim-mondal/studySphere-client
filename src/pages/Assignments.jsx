import { useLoaderData } from "react-router-dom";
import Assignment from "../components/Shared/Assignment";
import { useState } from "react";

const Assignments = () => {
  const loadedAssignments = useLoaderData();

  const [assignments, setAssignments] = useState(loadedAssignments);

  return (
    <div>
      <h3 className='text-3xl text-center mt-16'>
        Here is Present All Assignments Total: {assignments?.length}
      </h3>
      <div className='grid grid-cols-3'>
        {assignments?.map((assignment) => (
          <Assignment
            key={assignment._id}
            assignment={assignment}
            assignments={assignments}
            setAssignments={setAssignments}
            ></Assignment>
        ))}
      </div>
    </div>
  );
};

export default Assignments;
