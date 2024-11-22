"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import styles from "./Login.module.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage("");

    // Dummy-Authentifizierung
    if (email === "connector-api-demo@mews.com" && password === "connector-API-2024") {
      // Setze einen Cookie für den Login-Zustand
      Cookies.set("isLoggedIn", "true", { expires: 1 }); // Cookie läuft in 1 Tag ab

      // Weiterleitung zur Dashboard-Seite
      router.push("/dashboard");
    } else {
      setErrorMessage("Ungültiger Benutzername oder Passwort.");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <h1 className={styles.title}>Welcome</h1>
        <p className={styles.subtitle}>Log in to your Mews account</p>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label htmlFor="email">Email address or username</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email or username"
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className={styles.button}>
            Continue
          </button>
        </form>
        {errorMessage && <p className={styles.error}>{errorMessage}</p>}
      </div>
    </div>
  );
}