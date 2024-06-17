import { BarChart } from "@mui/x-charts/BarChart";

const onlineData = [14000, 13000, 20000, 12780, 11890, 12390, 13490];
const offlineData = [12400, 10398, 15500, 13908, 14800, 8800, 9300];
const xLabels = [
  "Saturday",
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
];

export default function TotalRevenueChart() {
  const onlineColor = "blue";
  const offlineColor = "green";
  return (
    <BarChart
      width={550}
      height={400}
      series={[
        { data: onlineData, label: "Online", id: "pvId", color: onlineColor },
        {
          data: offlineData,
          label: "Offline",
          id: "uvId",
          color: offlineColor,
        },
      ]}
      xAxis={[{ data: xLabels, scaleType: "band" }]}
    />
  );
}
