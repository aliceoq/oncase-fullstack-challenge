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
  return (
    <StyledTable>
      <thead>
        <TableRow>
          <TableHeader></TableHeader>
          <TableHeader>First name</TableHeader>
          <TableHeader>Last name</TableHeader>
          <TableHeader>Participation</TableHeader>
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
