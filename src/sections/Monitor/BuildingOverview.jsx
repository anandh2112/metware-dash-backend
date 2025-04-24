import React from 'react';
import MonthlyConsumption from './MonthlyConsumption';

const BuildingOverview = () => {
  return (
    <div className="bg-white m-3 p-4 sm:p-6 rounded-lg shadow-lg flex flex-col justify-center items-center">
      <h2 className="text-lg font-bold mb-8 self-start">Grid Consumption (kWh)</h2>
      <div className=" w-full">
        <MonthlyConsumption />
      </div>
    </div>
  );
};

export default BuildingOverview;