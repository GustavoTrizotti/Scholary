import { createBrowserRouter, RouterProvider } from "react-router-dom"; 
import React from "react";
import "./index.css"

import Home from "./routes/Home/";
import Tasks from "./routes/Tasks";
import Users from "./routes/Users";
import Grades from "./routes/Grades";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/tasks",
      element: <Tasks />,
    },
    {
      path: "/grades",
      element: <Grades />,
    },
    {
      path: "/user",
      element: <Users />,
    },
  ])

  return (
    <RouterProvider router={router}/>
  );
}

export default App;
