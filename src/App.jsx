import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Semester from "./components/Semester";
import Subject from "./components/Subject";
import NotFound from "./pages/NotFound";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import AddFile from "./pages/AddFile";
import UserDetailsProvider from "./GlobalContext/UserDetailsProvider";
import ReloadProvider from "./GlobalContext/ReloadProvider";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/semester",
      element: <Home />,
    },
    {
      path: "/*",
      element: <NotFound />,
    },
    {
      path: "/projects",
      element: <NotFound />,
    },
    {
      path: "/login",
      element: <NotFound />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
    {
      path: "/signin",
      element: <SignIn />,
    },
    {
      path: "/addFile",
      element: <AddFile />,
    },

    {
      path: "/semester/:id",
      element: <Semester />,
      children: [
        {
          path: "subject/:id?",
          element: <Subject />,
        },
      ],
    },
  ]);

  return (
    <ReloadProvider>
    <UserDetailsProvider>
      <RouterProvider router={router}></RouterProvider>;
    </UserDetailsProvider>
    </ReloadProvider>
  );
}

export default App;
