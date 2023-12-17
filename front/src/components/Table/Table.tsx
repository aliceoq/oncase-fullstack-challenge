import { Participant } from "../../types";

interface Props {
  participants: Participant[];
}

function Table({ participants }: Props) {
  return (
    <table>
      <tr>
        <th></th>
        <th>First name</th>
        <th>Last name</th>
        <th>Participation</th>
      </tr>
      {participants.map((participant, index) => (
        <tr>
          <td>{index}</td>
          <td>{participant.name}</td>
          <td>{participant.lastname}</td>
          <td>{participant.participation}%</td>
        </tr>
      ))}
    </table>
  );
}

export default Table;
