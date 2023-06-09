import "./App.css";
import { createHashRouter, RouterProvider } from "react-router-dom";

import Dashboard from "./components/Dashboard";
import Login from "./components/Login";

const router = createHashRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "login",
    element: <Login />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
