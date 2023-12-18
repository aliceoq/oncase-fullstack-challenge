import { Outlet } from "react-router-dom";
import { getParticipants } from "../../services/participant.service";
import { useQuery } from "@tanstack/react-query";
import ErrorComponent from "../../components/ErrorComponent/ErrorComponent";

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

  return <Outlet context={{ participants: data ?? [] }} />;
}

export default Default;
