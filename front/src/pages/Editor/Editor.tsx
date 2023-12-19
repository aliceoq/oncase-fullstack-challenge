import { useOutletContext } from "react-router-dom";
import { ContextType, Participant } from "../../types";
import EditorTable from "../../components/EditorTable/EditorTable";
import { ContentContainer, Flex, StyledForm } from "./Editor.styles";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { t } from "i18next";
import { FormEvent, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import {
  deleteParticipant,
  updateParticipant,
} from "../../services/participant.service";
import { queryClient } from "../..";
import { toast } from "react-toastify";

function Editor() {
  const context = useOutletContext<ContextType>();
  const [editingParticipant, setEditingParticipant] = useState<Participant>({
    name: "",
    lastname: "",
    participation: 0,
  });

  const editParticipantMutation = useMutation({
    mutationFn: async (newParticipant: Participant) => {
      const { data } = await updateParticipant(newParticipant);
      return data;
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["getParticipants"],
        refetchType: "active",
      });
      toast.success(t("toast_edit.success"));
    },
    onError: () => {
      toast.error(t("toast_edit.error"));
    },
  });

  const deleteParticipantMutation = useMutation({
    mutationFn: async (newParticipant: Participant) => {
      const { data } = await deleteParticipant(newParticipant);
      return data;
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["getParticipants"],
        refetchType: "active",
      });
      toast.success(t("toast_edit.success"));
    },
    onError: () => {
      toast.error(t("toast_edit.error"));
    },
  });

  const handleEdit = (participant: Participant) => {
    setEditingParticipant(participant);
  };

  const handleDelete = (participant: Participant) => {
    if (participant === editingParticipant)
      setEditingParticipant({ name: "", lastname: "", participation: 0 });
    deleteParticipantMutation.mutate(participant);
  };

  const handleParticipationChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEditingParticipant({
      ...editingParticipant,
      participation: parseInt(event.target.value) || 0,
    });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData: Participant = {
      name: event.currentTarget.firstname.value,
      lastname: event.currentTarget.lastname.value,
      participation: event.currentTarget.participation.value,
    };

    editParticipantMutation.mutate(formData);
    event.currentTarget.reset();
  };

  return (
    <ContentContainer>
      <h1>Editor</h1>
      <Flex>
        <EditorTable
          participants={context.participants}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
        <StyledForm onSubmit={handleSubmit}>
          <Input
            name="firstname"
            disabled
            placeholder={t("editor_form_first_name.input")}
            value={editingParticipant.name}
          />
          <Input
            name="lastname"
            disabled
            placeholder={t("editor_form_last_name.input")}
            value={editingParticipant?.lastname}
          />
          <Input
            name="participation"
            placeholder={t("editor_form_participation.input")}
            value={editingParticipant?.participation}
            onChange={handleParticipationChange}
          />
          <Button disabled={!editingParticipant}>
            {t("editor_form.button")}
          </Button>
        </StyledForm>
      </Flex>
    </ContentContainer>
  );
}

export default Editor;
