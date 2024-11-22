"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie"; // Für Login-Zustand

export default function Dashboard() {
  const router = useRouter();

  // Prüfe, ob der Benutzer eingeloggt ist
  useEffect(() => {
    const isLoggedIn = Cookies.get("isLoggedIn");

    // Wenn der Benutzer nicht eingeloggt ist, leite ihn zur Login-Seite weiter
    if (!isLoggedIn) {
      router.push("/");
    }
  }, [router]);

  // Zustand für den aktuellen Dashboard-Namen
  const [currentDashboard, setCurrentDashboard] = useState("ALLGEMEIN");

  // Beispiel-Daten
  const [data, setData] = useState([
    { id: 1, username: "dionarifi", email: "dionarifi@example.com", status: "Active" },
    { id: 2, username: "panatzhh", email: "panatzhh@example.com", status: "Pending" },
    { id: 3, username: "user3", email: "user3@example.com", status: "Inactive" },
  ]);

  // Funktion, um den Dashboard-Namen zu ändern und groß zu schreiben
  const handleDashboardChange = (name) => {
    setCurrentDashboard(name.toUpperCase());
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      {/* Header */}
      <header style={headerStyle}>
        {/* Dashboard-Name oben links */}
        <div style={nameContainerStyle}>
          <h1 style={dashboardNameStyle}>{currentDashboard}</h1>
        </div>

        {/* Buttons oben */}
        <div style={buttonContainerStyle}>
          <button
            style={buttonStyle}
            onClick={() => handleDashboardChange("Allgemein")}
          >
            Allgemein
          </button>
          <button
            style={buttonStyle}
            onClick={() => handleDashboardChange("Stoos Lodge")}
          >
            Stoos Lodge
          </button>
          <button
            style={buttonStyle}
            onClick={() => handleDashboardChange("Wellness Hotel")}
          >
            Wellness Hotel
          </button>
          <button
            style={buttonStyle}
            onClick={() => handleDashboardChange("Fronalpstock")}
          >
            Fronalpstock
          </button>
        </div>
      </header>

      {/* Tabelle */}
      <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}>
        <thead>
          <tr style={{ backgroundColor: "#007bff", color: "white", textAlign: "left" }}>
            <th style={cellStyle}>ID</th>
            <th style={cellStyle}>Username</th>
            <th style={cellStyle}>Email</th>
            <th style={cellStyle}>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id} style={{ borderBottom: "1px solid #ddd" }}>
              <td style={cellStyle}>{row.id}</td>
              <td style={cellStyle}>{row.username}</td>
              <td style={cellStyle}>{row.email}</td>
              <td style={cellStyle}>{row.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Styling für Header
const headerStyle = {
  display: "grid",
  gridTemplateColumns: "1fr auto",
  alignItems: "center",
  marginBottom: "20px",
};

// Styling für Dashboard-Namen
const nameContainerStyle = {
  display: "flex",
  alignItems: "center",
};

const dashboardNameStyle = {
  fontSize: "28px",
  fontWeight: "bold",
  margin: 0,
  textTransform: "uppercase",
};

// Styling für den Button-Container
const buttonContainerStyle = {
  display: "flex",
  gap: "10px",
};

// Styling für Buttons
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

// Styling für Tabellenzellen
const cellStyle = {
  padding: "10px",
  border: "1px solid #ddd",
};