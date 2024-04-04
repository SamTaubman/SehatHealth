import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ChatBot from './ChatBot.jsx';
import CoPilot from './CoPilot.jsx';
import Home from './Home.jsx'
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "copilot",
    element: <CoPilot />,
  },
  {
    path: "chatbot",
    element: <ChatBot />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
