import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

const BarChartPage = ({ charData }) => {
  const options = {
    plugins: {
      legend: false,
      title: {
        display: false,
        text: 'Rapid Quest',
      },
      customCanvasBackgroundColor: {
        color: 'lightGreen',
      },
    },
    layout: {
      margin: {
        top: 30,
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
        min: 0,
        max: 300,
        with: 60,
        stepSize: 100,
        ticks: {
          callback: (value) => `$${value}`,
        },
      },
    },
  };

  return (
    <div className='w-[310px] mt-6 pl-7 mb-20 lg:mb-10 lg:w-full lg:h-[210px] lg:flex lg:justify-center'>
      <Bar data={charData} options={options} />
    </div>
  );
};

export default BarChartPage;