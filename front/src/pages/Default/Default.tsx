import { Outlet, useLocation, useNavigate } from "react-router-dom";
import {
  addParticipant,
  getParticipants,
} from "../../services/participant.service";
import { useMutation, useQuery } from "@tanstack/react-query";
import ErrorComponent from "../../components/ErrorComponent/ErrorComponent";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";
import { Participant } from "../../types";
import { queryClient } from "../..";
import { FormEvent } from "react";
import { StyledForm, TopBar } from "./Default.styles";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import LoadingComponent from "../../components/LoadingComponent/LoadingComponent";

function Default() {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["getParticipants"],
    queryFn: async () => {
      const { data } = await getParticipants();
      return data;
    },
  });

  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const addParticipantMutation = useMutation({
    mutationFn: async (newParticipant: Participant) => {
      const { data } = await addParticipant(newParticipant);
      return data;
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["getParticipants"],
        refetchType: "active",
      });
      toast.success(t("toast_add.success"));
    },
    onError: () => {
      toast.error(t("toast_add.error"));
    },
  });

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData: Participant = {
      name: event.currentTarget.firstname.value,
      lastname: event.currentTarget.lastname.value,
      participation: event.currentTarget.participation.value,
    };

    addParticipantMutation.mutate(formData);
    event.currentTarget.reset();
  };

  if (isLoading) {
    return <LoadingComponent />;
  }

  if (isError) {
    return <ErrorComponent>{error.message}</ErrorComponent>;
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
      <TopBar>
        <StyledForm onSubmit={handleSubmit}>
          <Input
            name="firstname"
            placeholder={t("editor_form_first_name.input")}
          />
          <Input
            name="lastname"
            placeholder={t("editor_form_last_name.input")}
          />
          <Input
            name="participation"
            placeholder={t("editor_form_participation.input")}
          />
          <Button type="submit">{t("editor_form.button")}</Button>
        </StyledForm>
        {location.pathname === "/editor" && (
          <Button onClick={() => navigate("/")}>
            {t("editor.button")}
          </Button>
        )}
        {location.pathname === "/" && (
          <Button onClick={() => navigate("/editor")}>
            {t("view.button")}
          </Button>
        )}
      </TopBar>
      <Outlet context={{ participants: data ?? [] }} />
    </div>
  );
}

export default Default;
