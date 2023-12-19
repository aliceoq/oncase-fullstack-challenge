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
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

export const queryClient = new QueryClient();
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
    <I18nextProvider i18n={i18n}>
      <QueryClientProvider client={new QueryClient()}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </I18nextProvider>
  </React.StrictMode>
);
