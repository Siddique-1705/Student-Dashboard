import React, { useState, useEffect } from "react";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import styled from "styled-components";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip);

function AttendanceGraph() {
  const [attendanceData, setAttendanceData] = useState([
    { week: "Week 1", present: 80, absent: 70 },
    { week: "Week 2", present: 90, absent: 30 },
    { week: "Week 3", present: 75, absent: 65 },
    { week: "Week 4", present: 85, absent: 45 },
    { week: "Week 5", present: 95, absent: 35 },
    { week: "Week 6", present: 85, absent: 25 },
    { week: "Week 7", present: 85, absent: 45 },
    { week: "Week 8", present: 85, absent: 65 },
  ]);

  const chartData = {
    labels: attendanceData.map(entry => entry.week),
    datasets: [
      {
        label: 'Present',
        data: attendanceData.map(entry => entry.present),
        backgroundColor: 'green',
        barThickness: 'flex' 
      },
      {
        label: 'Absent',
        data: attendanceData.map(entry => entry.absent),
        backgroundColor: 'red',
        barThickness: 'flex' 
      }
    ],
  };

  const chartOptions = {
    scales: {
      x: {
        ticks: {
          rotation: 45 
        }
      },
      y: {
        min: 10,
        max: 100,
        ticks: {
          callback: function(value, index, values) {
            return value;
          }
        }
      }
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: (context) => {
            const label = context.dataset.label || '';
            const value = context.parsed.y;
            return `${label}: ${value}%`;
          }
        }
      }
    }
  };

  return (
    <Attendancestyle>
      <h2>Total Attendance Report</h2>
      <Bar data={chartData} options={chartOptions} />
      <div className="pre-abs"><p><i class="fa-solid fa-circle"></i>&nbsp;Present</p>
      <p><i style={{color:'red'}} class="fa-solid fa-circle"></i>&nbsp;Absent</p></div>
    </Attendancestyle>
  );
}

export default AttendanceGraph;


const Attendancestyle = styled.div`
  .pre-abs{
    display: flex;
    font-size: 14px;
    gap: 2rem;
    padding-left: 8rem;
  }
  .fa-circle{
    font-size: 12px;
    color: green;
    padding-left: 10px;
  }
`