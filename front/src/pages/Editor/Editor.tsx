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

function Editor() {
  const context = useOutletContext<ContextType>();
  const addParticipantMutation = useMutation({
    mutationFn: async (newParticipant: Participant) => {
      const { data } = await addParticipant(newParticipant);
      return data;
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
        <Input name="firstname" placeholder="First name" />
        <Input name="lastname" placeholder="Last name" />
        <Input name="participation" placeholder="Participation" />
        <Button type="submit">SEND</Button>
      </StyledForm>
      <ContentContainer>
        <TitleContainer>
          <h1>Data</h1>
          <p>Descrição</p>
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
