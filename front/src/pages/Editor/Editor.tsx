import { useOutletContext } from "react-router-dom";
import Table from "../../components/Table/Table";
import { ContextType } from "../../types";

function Editor() {
  const context = useOutletContext<ContextType>();

  return (
    <div>
      <h1>Editor</h1>
      <Table participants={context.participants} />
    </div>
  );
}

export default Editor;
