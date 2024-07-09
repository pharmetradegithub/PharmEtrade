import React from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";

const EarningsChart = () => {
  const data = {
    labels: [
      "Feb 1",
      "Feb 2",
      "Feb 3",
      "Feb 4",
      "Feb 5",
      "Feb 6",
      "Feb 7",
      "Feb 8",
      "Feb 9",
      "Feb 10",
    ],
    datasets: [
      {
        label: "Order",
        backgroundColor: "#FB923C", // Tailwind orange-400
        borderColor: "#FB923C",
        borderWidth: 1,
        hoverBackgroundColor: "#F97316", // Tailwind orange-500
        hoverBorderColor: "#F97316",
        data: [30, 50, 20, 25, 40, 50, 35, 25, 40, 50],
        stack: "stack1", // Group in the same stack
      },
      {
        label: "Sells",
        backgroundColor: "#A78BFA", // Tailwind violet-400
        borderColor: "#A78BFA",
        borderWidth: 1,
        hoverBackgroundColor: "#8B5CF6", // Tailwind violet-500
        hoverBorderColor: "#8B5CF6",
        data: [10, 25, 15, 20, 25, 30, 20, 15, 25, 30],
        stack: "stack1", // Group in the same stack
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        stacked: true, // Stack bars horizontally
      },
      y: {
        beginAtZero: true,
        max: 100, // Adjust max value if necessary
        ticks: {
          stepSize: 10,
        },
        stacked: true, // Stack bars vertically
      },
    },
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
    },
  };

  return (
    <div className="p-4 w-full mx-auto">
      <h2 className="text-2xl font-bold mb-4">Earnings Report</h2>
      <div className="relative h-96">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default EarningsChart;