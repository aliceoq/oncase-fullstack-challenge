import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { Participant } from "../../types";

const chartOptions: ApexOptions = {
  chart: {
    type: "donut",
  },
  legend: {
    show: true,
    position: "right",
    fontSize: "12px",
    markers: {
      width: 25,
      height: 25,
      radius: 5,
      offsetX: -8,
    },
    labels: {
      useSeriesColors: true,
    },
    itemMargin: {
      vertical: 10,
    },
  },
  dataLabels: {
    enabled: false,
  },
};

interface Props {
  participants: Participant[] | [];
}

function DonutChart({ participants }: Props) {
  const totalParticipation = participants.reduce(
    (sum, participant) => sum + participant.participation,
    0
  );
  const remainingParticipation = Math.max(0, 100 - totalParticipation);

  const series = [...participants.map((participant) => participant.participation), remainingParticipation];
  const labels = [...participants.map((participant) => `${participant.name} ${participant.lastname}`), 'Remaining'];

  const options: ApexOptions = {
    ...chartOptions,
    series,
    labels,
  };

  return <ReactApexChart options={options} series={series} type="donut" />;
}

export default DonutChart;
