import { useOutletContext } from "react-router-dom";
import Table from "../../components/Table/Table";
import { ContextType, Participant } from "../../types";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import DonutChart from "../../components/DonutChart/DonutChart";
import {
  ChartContainer,
  ContentContainer,
  DataContainer,
  StyledForm,
  TitleContainer,
} from "./Editor.styles";
import { useMutation } from "@tanstack/react-query";
import { addParticipant } from "../../services/participant.service";
import { FormEvent } from "react";
import { queryClient } from "../..";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

function Editor() {
  const { t } = useTranslation();
  const context = useOutletContext<ContextType>();

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

  return (
    <div>
      <StyledForm onSubmit={handleSubmit}>
        <Input
          name="firstname"
          placeholder={t("editor_form_first_name.input")}
        />
        <Input name="lastname" placeholder={t("editor_form_last_name.input")} />
        <Input
          name="participation"
          placeholder={t("editor_form_participation.input")}
        />
        <Button type="submit">{t("editor_form.button")}</Button>
      </StyledForm>
      <ContentContainer>
        <TitleContainer>
          <h1>{t("editor.title")}</h1>
          <p>{t("editor.description")}</p>
        </TitleContainer>
        <DataContainer>
          <Table participants={context.participants} />
          <ChartContainer>
            <DonutChart participants={context.participants} />
          </ChartContainer>
        </DataContainer>
      </ContentContainer>
    </div>
  );
}

export default Editor;
