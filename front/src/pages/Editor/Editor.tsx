import { useOutletContext } from "react-router-dom";
import Table from "../../components/Table/Table";
import { ContextType } from "../../types";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import DonutChart from "../../components/DonutChart/DonutChart";
import { ChartContainer } from "./Editor.styles";

function Editor() {
  const context = useOutletContext<ContextType>();

  return (
    <div>
      <h1>Editor</h1>
      <div>
        <form>
          <Input />
          <Input />
          <Button onClick={() => alert("clicked")}>Submeter</Button>
        </form>
      </div>
      <Table participants={context.participants} />
      <ChartContainer>
        <DonutChart participants={context.participants} />
      </ChartContainer>
    </div>
  );
}

export default Editor;
