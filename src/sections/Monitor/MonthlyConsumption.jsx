import React, { useState, useEffect } from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import axios from 'axios';

const MonthlyConsumption = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  const [monthlyConsumption, setMonthlyConsumption] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const currentTime = new Date().toISOString().replace('T', ' ').substr(0, 19);

      try {
        const response = await axios.get('https://mw.elementsenergies.com/api/mbconsumption', {
          params: {
            year: year,
            currentTime: currentTime,
          },
        });

        const roundedData = response.data.monthlyConsumption.map(value => parseFloat(value).toFixed(1)).map(value => parseFloat(value));
        setMonthlyConsumption(roundedData);
      } catch (error) {
        console.error('Error fetching monthly consumption:', error);
      }
    };

    fetchData();
  }, [year]);

  const handleYearChange = (e) => {
    setYear(e.target.value);
  };

  const isSmallScreen = typeof window !== 'undefined' && window.innerWidth < 640;

  const chartOptions = {
    chart: {
      type: 'column',
      width: isSmallScreen ? 1000 : null,
    },
    title: {
      text: null
    },
    xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      title: {
        text: null
      },
      gridLineWidth: 0,  // Disable x-axis grid lines
      lineWidth: 0,  // Disable x-axis line
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Energy (kWh)'
      },
      gridLineWidth: 0,  // Disable y-axis grid lines
      lineWidth: 0,  // Disable y-axis line
    },
    series: [
      {
        name: 'Consumption',
        data: monthlyConsumption,
        color: '#34D399'
      }
    ],
    tooltip: {
      pointFormat: '{point.y} kWh',
    },
    credits: {
      enabled: false
    },
    plotOptions: {
      column: {
        dataLabels: {
          enabled: true
        },
        enableMouseTracking: true
      }
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <label htmlFor="year-picker" className="mr-2 text-sm font-medium">Year:</label>
          <input 
            id="year-picker" 
            type="number" 
            value={year} 
            onChange={handleYearChange} 
            min="2000" 
            max={new Date().getFullYear()} 
            className="border rounded p-1 text-sm w-20"
          />
        </div>
      </div>
      <div className='overflow-x-auto overflow-y-hidden'>
        <div className="min-w-[1000px]">
          <HighchartsReact highcharts={Highcharts} options={chartOptions} />
        </div>
      </div>
    </div>
  );
};

export default MonthlyConsumption;