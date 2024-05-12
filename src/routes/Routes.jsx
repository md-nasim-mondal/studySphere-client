import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import Assignments from "../pages/Assignments";
import CreateAssignments from "../pages/CreateAssignments";
import PendingAssignments from "../pages/PendingAssignments";
import MyAttemptedAssignments from "../pages/MyAttemptedAssignments";
import AssignmentDetails from "../pages/AssignmentDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registration",
        element: <Register />,
      },
      {
        path: "/assignments",
        element: <Assignments />,
        loader: () => fetch(`${import.meta.env.VITE_API_URL}/assignments`),
      },
      {
        path: "/createAssignments",
        element: <CreateAssignments />,
      },
      {
        path: "/pendingAssignments",
        element: <PendingAssignments />,
      },
      {
        path: "/my-attempted-assignments",
        element: <MyAttemptedAssignments />,
      },
      {
        path: "/my-created-assignments",
        element: <MyAttemptedAssignments />,
      },
      {
        path: "/assignment/:id",
        element: <AssignmentDetails />,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/assignment/${params.id}`),
      },
    ],
  },
]);

export default router;
