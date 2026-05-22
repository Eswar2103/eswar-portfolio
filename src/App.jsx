import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import AppLayout from "./AppLayout";
import ErrorPage from "./Pages/ErrorPage";
import Home from "./Pages/Home";
import GetInTouch from "./components/GetInTouch";

function App() {
  const routes = createBrowserRouter([
    {
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/getintouch",
          element: <GetInTouch />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
