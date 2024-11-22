"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export default function Dashboard() {
  const router = useRouter();

  // Zustand für die Autorisierung
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    const isLoggedIn = Cookies.get("isLoggedIn");

    if (!isLoggedIn) {
      // Weiterleitung zur Login-Seite
      router.push("/");
    } else {
      // Benutzer ist eingeloggt
      setIsAuthorized(true);
    }
  }, [router]);

  // Zustand für den aktuellen Dashboard-Namen
  const [currentDashboard, setCurrentDashboard] = useState("ALLGEMEIN");

  // Beispiel-Daten für die Tabelle
  const data = [
    { id: 1, username: "dionarifi", email: "dionarifi@example.com", status: "Active" },
    { id: 2, username: "panatzhh", email: "panatzhh@example.com", status: "Pending" },
    { id: 3, username: "user3", email: "user3@example.com", status: "Inactive" },
  ];

  // Funktion, um den Dashboard-Namen zu ändern
  const handleDashboardChange = (name) => {
    setCurrentDashboard(name.toUpperCase());
  };

  // Zeige nichts, solange die Autorisierung geprüft wird
  if (!isAuthorized) {
    return null;
  }

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      {/* Header */}
      <header style={headerStyle}>
        <h1 style={dashboardNameStyle}>{currentDashboard}</h1>
        <nav style={buttonContainerStyle}>
          <button style={buttonStyle} onClick={() => handleDashboardChange("Allgemein")}>
            Allgemein
          </button>
          <button style={buttonStyle} onClick={() => handleDashboardChange("Stoos Lodge")}>
            Stoos Lodge
          </button>
          <button style={buttonStyle} onClick={() => handleDashboardChange("Wellness Hotel")}>
            Wellness Hotel
          </button>
          <button style={buttonStyle} onClick={() => handleDashboardChange("Fronalpstock")}>
            Fronalpstock
          </button>
        </nav>
      </header>

      {/* Tabelle */}
      <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}>
        <thead>
          <tr style={{ backgroundColor: "#007bff", color: "white" }}>
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

const cellStyle = {
  padding: "10px",
  textAlign: "left",
};