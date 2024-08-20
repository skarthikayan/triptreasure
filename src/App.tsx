import Home from "./pages/Home";
import Discover from "./pages/Discover";
import SpecialDeals from "./pages/SpecialDeals";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

import AppLayout from "./components/AppLayout";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
          element: <SpecialDeals />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "signup",
          element: <Signup />,
        },
        {
          path: "",
          element: <Home />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;