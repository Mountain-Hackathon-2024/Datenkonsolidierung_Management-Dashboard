'use client';

import React from 'react';

const quarterlyData = {
  2023: {
    Q1: 12000,
    Q2: 15000,
    Q3: 18000,
    Q4: 20000,
  },
  2024: {
    Q1: 14000,
    Q2: 17000,
    Q3: 21000,
    Q4: 25000,
  },
};

// Funktion, um die Prognose zu berechnen
const calculateGrowth = (value2023, value2024) => {
  const growth = ((value2024 - value2023) / value2023) * 100;
  return growth.toFixed(2); // Auf 2 Nachkommastellen runden
};

export default function QuarterlyForecast() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', backgroundColor: '#f5f5f5' }}>
      <h1 style={dashboardNameStyle}>Quartalsübersicht & Prognose</h1>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={headerCellStyle}>Quartal</th>
            <th style={headerCellStyle}>2023 (CHF)</th>
            <th style={headerCellStyle}>2024 (CHF)</th>
            <th style={headerCellStyle}>Prognose (%)</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(quarterlyData[2023]).map((quarter) => (
            <tr key={quarter}>
              <td style={cellLeftStyle}>{quarter}</td>
              <td style={cellRightStyle}>{quarterlyData[2023][quarter]}</td>
              <td style={cellRightStyle}>{quarterlyData[2024][quarter]}</td>
              <td style={growthStyle(calculateGrowth(quarterlyData[2023][quarter], quarterlyData[2024][quarter]))}>
                {calculateGrowth(quarterlyData[2023][quarter], quarterlyData[2024][quarter])}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Styles
const dashboardNameStyle = {
  fontSize: '28px',
  fontWeight: 'bold',
  marginBottom: '20px',
  textAlign: 'center',
};

const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
  backgroundColor: '#fff',
  boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
  borderRadius: '8px',
  overflow: 'hidden',
  marginTop: '20px',
};

const headerCellStyle = {
  padding: '10px',
  backgroundColor: '#007bff',
  color: 'white',
  textAlign: 'center',
  fontWeight: 'bold',
  fontSize: '14px',
  borderBottom: '2px solid #ddd',
};

const cellLeftStyle = {
  padding: '10px',
  backgroundColor: '#f9f9f9',
  borderBottom: '1px solid #ddd',
  textAlign: 'left',
  fontSize: '14px',
};

const cellRightStyle = {
  ...cellLeftStyle,
  textAlign: 'right',
  fontWeight: 'bold',
};

const growthStyle = (growth) => ({
  ...cellRightStyle,
  color: growth > 0 ? 'green' : growth < 0 ? 'red' : 'black',
});