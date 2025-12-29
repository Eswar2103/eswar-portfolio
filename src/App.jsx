import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import AppLayout from "./AppLayout";
import ErrorPage from "./Pages/ErrorPage";
import Home from "./Pages/Home";

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
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
