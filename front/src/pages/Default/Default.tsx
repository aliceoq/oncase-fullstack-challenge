import { Outlet, useLocation, useNavigate } from "react-router-dom";
import {
  addParticipant,
  getParticipants,
} from "../../services/participant.service";
import { useMutation, useQuery } from "@tanstack/react-query";
import ErrorComponent from "../../components/ErrorComponent/ErrorComponent";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";
import { Participant } from "../../types";
import { queryClient } from "../..";
import { StyledForm, TopBar } from "./Default.styles";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import LoadingComponent from "../../components/LoadingComponent/LoadingComponent";
import { handleSubmit } from "../../utils/form";

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
      toast(t("toast_add.error"));
    },
  });

  if (isLoading) {
    return <LoadingComponent />;
  }

  if (isError) {
    return <ErrorComponent>{error.message}</ErrorComponent>;
  }

  return (
    <div>
      <TopBar>
        <StyledForm
          onSubmit={(event) => handleSubmit(event, addParticipantMutation)}
        >
          <Input
            data-cy="firstname"
            name="firstname"
            placeholder={t("editor_form_first_name.input")}
          />
          <Input
            data-cy="lastname"
            name="lastname"
            placeholder={t("editor_form_last_name.input")}
          />
          <Input
            data-cy="participation"
            name="participation"
            placeholder={t("editor_form_participation.input")}
          />
          <Button data-cy="submit-button" type="submit" disabled={addParticipantMutation.isPending}>
            {t("editor_form.button")}
          </Button>
        </StyledForm>
        {location.pathname === "/editor" && (
          <Button data-cy="editor-page-button" onClick={() => navigate("/")}>
            {t("editor.button")}
          </Button>
        )}
        {location.pathname === "/" && (
          <Button
            data-cy="view-page-button"
            onClick={() => navigate("/editor")}
          >
            {t("view.button")}
          </Button>
        )}
      </TopBar>
      <Outlet context={{ participants: data ?? [] }} />
    </div>
  );
}

export default Default;
