import React from "react";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Project from "./Project";
import Contact from "./Contact";
import Footer from "./Footer";

import { createBrowserRouter, RouterProvider } from "react-router-dom";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Header /><Home/></>
    },
    {
      path: "/About",
      element: <><Header/><About /></>
    },
    {
      path: "/Skills",
      element: <><Header/><Skills /></>
    },
    {
      path: "/Project",
      element: <><Header/><Project /></>,
    },
    {
      path: "/Contact",
      element: <><Header/><Contact /><Footer/></>
    },
  ]);

  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
