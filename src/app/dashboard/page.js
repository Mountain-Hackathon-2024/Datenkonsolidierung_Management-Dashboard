"use client";

import React, { useState } from "react";
import hotelData from "../data/hotelData";

export default function Dashboard() {
  const [selectedHotel, setSelectedHotel] = useState("allgemein"); // Standardmäßig "Allgemein"
  const currentData = hotelData[selectedHotel]; // Hole die Daten des aktuellen Hotels

  // Funktion, um Unterkategorien in einer Tabelle darzustellen
  const renderCategory = (title, categoryData) => (
    <React.Fragment key={title}>
      <tr>
        <th style={categoryHeaderStyle} colSpan="2">{title}</th>
      </tr>
      {Object.entries(categoryData).map(([key, value]) => (
        <tr key={key}>
          <td style={cellStyle}>{formatKey(key)}</td>
          <td style={getValueStyle(value)}>{value}</td>
        </tr>
      ))}
    </React.Fragment>
  );

  // Schlüssel (Key) formatieren (z. B. "gästeImHaus" → "Gäste im Haus")
  const formatKey = (key) =>
    key
      .replace(/([A-Z])/g, " $1")
      .replace(/^./, (str) => str.toUpperCase());

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      {/* Header */}
      <header style={headerStyle}>
        <h1 style={dashboardNameStyle}>{currentData.name}</h1>
        <nav style={buttonContainerStyle}>
          <button style={buttonStyle} onClick={() => setSelectedHotel("allgemein")}>
            Allgemein
          </button>
          <button style={buttonStyle} onClick={() => setSelectedHotel("stoosLodge")}>
            Stoos Lodge
          </button>
          <button style={buttonStyle} onClick={() => setSelectedHotel("wellnessHotel")}>
            Wellness Hotel
          </button>
          <button style={buttonStyle} onClick={() => setSelectedHotel("fronalpstock")}>
            Fronalpstock
          </button>
        </nav>
      </header>

      {/* Tabellen */}
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={headerCellStyle}>Kategorie</th>
            <th style={headerCellStyle}>Wert</th>
          </tr>
        </thead>
        <tbody>
          {/* Render Kategorien */}
          {renderCategory("Gäste", currentData.gäste)}
          {renderCategory("Zimmer", currentData.zimmer)}
          {renderCategory("Umsatz", currentData.umsatz)}
          {currentData.effizienz && renderCategory("Effizienz", currentData.effizienz)}
          {currentData.forecast && renderCategory("Forecast", currentData.forecast)}
        </tbody>
      </table>
    </div>
  );
}

// Funktion für dynamisches Styling basierend auf dem Wert
const getValueStyle = (value) => ({
  ...cellStyle,
  color: value > 0 ? "green" : value < 0 ? "red" : "black",
});

// Stile
const headerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "20px",
};

const dashboardNameStyle = {
  fontSize: "28px",
  fontWeight: "bold",
  margin: 0,
};

const buttonContainerStyle = {
  display: "flex",
  gap: "10px",
};

const buttonStyle = {
  padding: "10px 20px",
  fontSize: "14px",
  fontWeight: "bold",
  backgroundColor: "#007bff",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

const tableStyle = {
  width: "100%",
  borderCollapse: "separate",
  borderSpacing: "0 10px", // Abstand zwischen den Tabellenzeilen
  marginTop: "20px",
};

const headerCellStyle = {
  padding: "10px",
  backgroundColor: "#007bff",
  color: "white",
  textAlign: "left",
  fontWeight: "bold",
};

const categoryHeaderStyle = {
  ...headerCellStyle,
  backgroundColor: "#0056b3",
  textAlign: "center",
};

const cellStyle = {
  padding: "10px",
  border: "1px solid #ddd",
  textAlign: "left",
  backgroundColor: "white",
};