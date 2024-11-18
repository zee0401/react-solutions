import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserForm from "./UserForm";
import { userFormAction } from "./actions";

const router = createBrowserRouter([
  {
    path: "/submit-form",
    element: <UserForm />,
    action: userFormAction,
  },
  {
    path: "/thank-you",
    element: <div>Thank you for submitting the form!</div>,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
