import { useOutletContext } from "react-router-dom";
import Table from "../../components/Table/Table";
import { ContextType } from "../../types";
import DonutChart from "../../components/DonutChart/DonutChart";
import {
  ChartContainer,
  ContentContainer,
  DataContainer,
  TitleContainer,
} from "./DataView.styles";
import { useTranslation } from "react-i18next";

function DataView() {
  const { t } = useTranslation();
  const context = useOutletContext<ContextType>();

  return (
    <ContentContainer>
      <TitleContainer>
        <h1>{t("view.title")}</h1>
        <p>{t("view.description")}</p>
      </TitleContainer>
      <DataContainer>
        <Table participants={context.participants} />
        <ChartContainer>
          <DonutChart participants={context.participants} />
        </ChartContainer>
      </DataContainer>
    </ContentContainer>
  );
}

export default DataView;
