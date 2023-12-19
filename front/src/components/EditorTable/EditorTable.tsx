import { useTranslation } from "react-i18next";
import { Participant } from "../../types";
import {
  ButtonCell,
  IndexCell,
  PercentageCell,
  StyledTable,
  TableCell,
  TableHeader,
  TableRow,
} from "./EditorTable.styles";
import EditIcon from "../Icon/edit-icon";
import DeleteIcon from "../Icon/delete-icon";

interface Props {
  participants: Participant[];
  onEdit: (participant: Participant) => void;
  onDelete: (participant: Participant) => void;
}

function EditorTable({ participants, onEdit, onDelete }: Props) {
  const { t } = useTranslation();

  return (
    <StyledTable>
      <thead>
        <TableRow>
          <TableHeader></TableHeader>
          <TableHeader>{t("editor_form_first_name.input")}</TableHeader>
          <TableHeader>{t("editor_form_last_name.input")}</TableHeader>
          <TableHeader>{t("editor_form_participation.input")}</TableHeader>
        </TableRow>
      </thead>
      <tbody>
        {participants.map((participant, index) => (
          <TableRow key={index}>
            <IndexCell>{index + 1}</IndexCell>
            <TableCell>{participant.name}</TableCell>
            <TableCell>{participant.lastname}</TableCell>
            <PercentageCell>{participant.participation}%</PercentageCell>
            <ButtonCell>
              <button onClick={() => onEdit(participant)}>
                <EditIcon width="24" height="24" />
              </button>
            </ButtonCell>
            <ButtonCell>
              <button onClick={() => onDelete(participant)}>
                <DeleteIcon width="24" height="24" />
              </button>
            </ButtonCell>
          </TableRow>
        ))}
      </tbody>
    </StyledTable>
  );
}

export default EditorTable;
