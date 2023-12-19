import { Outlet } from "react-router-dom";
import { getParticipants } from "../../services/participant.service";
import { useQuery } from "@tanstack/react-query";
import ErrorComponent from "../../components/ErrorComponent/ErrorComponent";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Default() {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["getParticipants"],
    queryFn: async () => {
      const { data } = await getParticipants();
      return data;
    },
  });

  if (isLoading) {
    return <ErrorComponent>Loading...</ErrorComponent>;
  }

  if (isError) {
    return <ErrorComponent>Error: {error.message}</ErrorComponent>;
  }

  return (
    <div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Outlet context={{ participants: data ?? [] }} />
    </div>
  );
}

export default Default;
