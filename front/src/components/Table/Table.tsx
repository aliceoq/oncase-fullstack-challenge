import { useTranslation } from "react-i18next";
import { Participant } from "../../types";
import {
  IndexCell,
  PercentageCell,
  StyledTable,
  TableCell,
  TableHeader,
  TableRow,
} from "./Table.styles";

interface Props {
  participants: Participant[];
}

function Table({ participants }: Props) {
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
          </TableRow>
        ))}
      </tbody>
    </StyledTable>
  );
}

export default Table;
