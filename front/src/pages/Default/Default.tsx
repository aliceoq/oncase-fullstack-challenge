import { Outlet } from "react-router-dom";
import { getParticipantsRequest } from "../../services/participant.service";
import { useQuery } from "@tanstack/react-query";

function Default() {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["participants"],
    queryFn: async () => {
      const { data } = await getParticipantsRequest();
      return data;
    },
  });

  if (isLoading) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div>
      <Outlet context={{ participants: data ?? [] }} />
    </div>
  );
}

export default Default;