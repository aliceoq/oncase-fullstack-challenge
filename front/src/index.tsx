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
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import DataView from "./pages/DataView/DataView";

export const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/",
    element: <Default />,
    children: [
      {
        path: '/',
        element: <DataView />
      },
      {
        path: "/editor",
        element: <Editor />,
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
    <I18nextProvider i18n={i18n}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </I18nextProvider>
  </React.StrictMode>
);
