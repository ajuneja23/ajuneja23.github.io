/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./components/Home/Home.js";
import AboutMe from "./components/AboutMe/AboutMe.js";
import BlogHead from "./components/BlogPosts/BlogHead.js";
import "./index.css";
import Kldivergence from "./components/BlogPosts/Posts/kldivergence/kldivergence.js";
import Resolutions from "./components/BlogPosts/Posts/resolutions/Resolutions.js";
import Experience from "./components/Experience/Experience.js";
/* const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Home />}>
      <Route path="aboutme" element={<AboutMe />} />
      <Route path="blog" element={<BlogHead />}>
        <Route
          path="/thinking-about-kl-divergence"
          element={<Kldivergence />}
        />
        <Route path="/resolutions" element={<Resolutions />} />
      </Route>
    </Route>
  )
); */

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/aboutme",
    element: <AboutMe />,
  },
  {
    path: "/blog",
    element: <BlogHead />,
  },
  {
    path: "/blog/thinking-about-kl-divergence",
    element: <Kldivergence />,
  },
  {
    path: "/blog/resolutions-for-2024",
    element: <Resolutions />,
  },
  {
    path: "/experience",
    element: <Experience />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
