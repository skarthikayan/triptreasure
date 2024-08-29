import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./pages/Home";
import Discover from "./pages/Discover";
import TravelPoint from "./pages/TravelPoint";
import Login from "./pages/Login";

import AppLayout from "./components/AppLayout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/triptreasure",
      element: <AppLayout />,
      // loader: <div>Loading</div>,
      children: [
        {
          path: "discover",
          element: <Discover />,
        },
        {
          path: "travel-point",
          element: <TravelPoint />,
        },
        {
          path: "user",
          element: <Login />,
        },
        {
          path: "",
          element: <Home />,
        },
      ],
    },
  ]);
  return (
    <>
      <ToastContainer />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
