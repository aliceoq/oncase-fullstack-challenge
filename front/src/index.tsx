import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Default from "./pages/Default/Default";
import Editor from "./pages/Editor/Editor";
import AdvancedEditor from "./pages/AdvancedEditor/AdvancedEditor";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Default />,
    children: [
      {
        path: "/",
        element: <Editor />,
      },
      {
        path: "/advanced",
        element: <AdvancedEditor />,
      },
    ],
  },
  {
    path: "*",
    loader: () => redirect("/"),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={new QueryClient()}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
