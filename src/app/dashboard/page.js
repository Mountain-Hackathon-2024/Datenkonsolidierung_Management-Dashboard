'use client';

import React, { useState } from 'react';
import hotelData from '../data/hotelData';

// Funktion zur Berechnung der Wachstumsrate
const calculateGrowth = (value2023, value2024) => {
  if (value2023 === 0) return value2024 > 0 ? "∞" : "0";
  const growth = ((value2024 - value2023) / value2023) * 100;
  return growth.toFixed(2);
};

export default function Dashboard() {
  const [selectedHotel, setSelectedHotel] = useState('gesamt');
  const currentData = hotelData[selectedHotel] || {};

  const renderCategoryWithQuarterlyData = (title, categoryData2023, categoryData2024) => {
    if (!categoryData2023 || !categoryData2024) return null;

    return (
      <table className="category-table" key={`${selectedHotel}-${title}`}>
        <thead>
          <tr>
            <th className="category-header" colSpan="4">{title}</th>
          </tr>
          <tr>
            <th>Kategorie</th>
            <th>2024</th>
            <th>2023</th>
            <th>Wachstum (%)</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(categoryData2023).map((key) => (
            <tr key={key}>
              <td>{formatKey(key)}</td>
              <td>{categoryData2024[key]}</td>
              <td>{categoryData2023[key]}</td>
              <td
                className={calculateGrowth(categoryData2023[key], categoryData2024[key]) > 0 ? 'positive' : 'negative'}
              >
                {calculateGrowth(categoryData2023[key], categoryData2024[key])}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  const renderForecast = (forecastData) => {
    if (!forecastData) return null;

    return (
      <table className="category-table" key={`${selectedHotel}-forecast`}>
        <thead>
          <tr>
            <th className="category-header" colSpan="4">Forecast</th>
          </tr>
          <tr>
            <th>Kategorie</th>
            <th>2024</th>
            <th>2023</th>
            <th>Wachstum (%)</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(forecastData).map(([key, value]) => (
            <tr key={key}>
              <td>{formatKey(key)}</td>
              <td>{value[2024]}</td>
              <td>{value[2023]}</td>
              <td
                className={calculateGrowth(value[2023], value[2024]) > 0 ? 'positive' : 'negative'}
              >
                {calculateGrowth(value[2023], value[2024])}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  const formatKey = (key) => key.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase());

  return (
    <div className="dashboard-container">
      <nav className="nav-bar">
        <span className="logo">Stoos Hotels</span>
        <div className="nav-links">
          <button onClick={() => setSelectedHotel('stoosLodge')}>Stoos Lodge</button>
          <button onClick={() => setSelectedHotel('wellnessHotel')}>Wellness Hotel</button>
          <button onClick={() => setSelectedHotel('fronalpstock')}>Fronalpstock</button>
          <button onClick={() => setSelectedHotel('gesamt')}>Gesamt</button>
        </div>
        <div className="nav-icons">
          <span title="Einstellungen">⚙️</span>
          <span title="Benutzerprofil">👤</span>
        </div>
      </nav>

      <div className="dashboard-content">
        <h1>{currentData.name || 'Hotel Übersicht'}</h1>
        <div className="table-container">
          {renderCategoryWithQuarterlyData('Gäste', currentData.gäste?.[2023], currentData.gäste?.[2024])}
          {renderCategoryWithQuarterlyData('Zimmer', currentData.zimmer?.[2023], currentData.zimmer?.[2024])}
          {renderCategoryWithQuarterlyData('Umsatz', currentData.umsatz?.[2023], currentData.umsatz?.[2024])}
          {renderForecast(currentData.forecast)}
        </div>
      </div>
    </div>
  );
}

// CSS-Stile
const style = document.createElement('style');
style.textContent = `
  .dashboard-container {
    font-family: Arial, sans-serif;
    background-color: #f5f5f5;
    min-height: 100vh;
    padding: 20px;
  }

  .nav-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #e0e0e0;
    padding: 10px 20px;
    border-bottom: 2px solid #ccc;
  }

  .logo {
    font-size: 24px;
    font-weight: bold;
    color: #007bff;
  }

  .nav-links button {
    background: none;
    border: none;
    font-size: 16px;
    font-weight: bold;
    color: #007bff;
    cursor: pointer;
    margin: 0 10px;
  }

  .nav-icons span {
    font-size: 18px;
    color: #007bff;
    cursor: pointer;
    margin-left: 15px;
  }

  .dashboard-content h1 {
    text-align: center;
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  .table-container {
    margin-top: 20px;
  }

  .category-table {
    width: 100%;
    table-layout: fixed; /* Spaltenbreite fixieren */
    border-collapse: collapse;
    margin-bottom: 20px;
    background-color: #fff;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    overflow: hidden;
  }

  .category-table th,
  .category-table td {
    padding: 15px;
    text-align: center;
    font-size: 14px;
    border: 1px solid #ddd;
  }

  .category-header {
    background-color: #007bff;
    color: white;
    text-align: center;
    font-weight: bold;
    font-size: 16px;
  }

  .positive {
    color: green;
  }

  .negative {
    color: red;
  }
`;
document.head.appendChild(style);