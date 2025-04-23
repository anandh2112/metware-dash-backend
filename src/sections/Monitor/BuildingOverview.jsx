import React from 'react';
import MonthlyConsumption from './MonthlyConsumption';

const BuildingOverview = () => {
  return (
    <div className="bg-white m-3 p-3 rounded-lg shadow-lg flex flex-col justify-center items-center">
      <h2 className="text-lg font-semibold mb-12">Grid Consumption (kWh)</h2>
      <div className=" w-full">
        <MonthlyConsumption />
      </div>
    </div>
  );
};

export default BuildingOverview;