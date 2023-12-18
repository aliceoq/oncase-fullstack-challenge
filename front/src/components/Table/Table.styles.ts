import styled from "styled-components";

const StyledTable = styled.table`
  height: max-content;
  border-collapse: collapse;
  color: #575757;
`;

const TableRow = styled.tr``;

const TableHeader = styled.th`
  padding: 8px;
  text-align: left;
  border: 1px solid #ddd;
  font-weight: 400;
`;

const TableCell = styled.td`
  padding: 8px;
  text-align: left;
  border: 1px solid #ddd;
`;

const IndexCell = styled(TableCell)`
  min-width: 25px;
  text-align: center;
`;

const PercentageCell = styled(TableCell)`
  font-weight: bold;
  color: #00B8E2;
  text-align: center;
`;

export {
  StyledTable,
  TableCell,
  TableHeader,
  TableRow,
  IndexCell,
  PercentageCell,
};
