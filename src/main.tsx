import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layoutv1 from "./pages/Layoutv1/Layoutv1.tsx";
import Layoutv2 from "./pages/Layoutv2/Layoutv2.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/v1",
    element: <Layoutv1 />,
  },
  {
    path: "/v2",
    element: <Layoutv2 />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
