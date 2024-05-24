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
import About from "./pages/About";
import Projects from "./pages/Projects";
import BookMarks from "./pages/BookMarks"
import RecentlyVisited from "./pages/RecentlyVisited"
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
      path: "/about",
      element: <About />,
    },
    {
      path: "/projects",
      element: <Projects />,
    },
    {
      path: "/bookmarks",
      element: <BookMarks/>,
    },
    {
      path: "/recentlyVisited",
      element: <RecentlyVisited/>,
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
        <RouterProvider router={router}></RouterProvider>
      </UserDetailsProvider>
    </ReloadProvider>
  );
}

export default App;
