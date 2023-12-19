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
      width: 16,
      height: 16,
      radius: 5,
      offsetX: -8,
    },
    labels: {
      useSeriesColors: true,
    },
  },
  dataLabels: {
    enabled: false,
  },
  plotOptions: {
    pie: {
      donut: {
        size: "50%"
      }
    }
  }
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

  const series = [remainingParticipation, ...participants.map((participant) => participant.participation)];
  const labels = ['Remaining', ...participants.map((participant) => `${participant.name} ${participant.lastname}`),];

  const options: ApexOptions = {
    ...chartOptions,
    series,
    labels,
  };

  return <ReactApexChart options={options} series={series} type="donut" />;
}

export default DonutChart;
