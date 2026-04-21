"use client";

import Link from "next/link";
import { useState } from "react";
import Container from "@/components/layout/Container";
import Input from "@/components/ui/Input";

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const formData = new FormData(e.currentTarget);
      const email = formData.get("email");
      const password = formData.get("password");

      if (!email || !password) {
        setError("Please fill in all fields");
        return;
      }

      // TODO: Add your login API call here
      console.log("Login attempt:", { email, password });
      // Example: const response = await fetch("/api/login", { method: "POST", body: formData });
      alert("Login functionality to be implemented with your backend");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section className="page-section">
      <Container>
        <div className="auth-card">
          <h1 className="auth-title">Login</h1>
          <p className="auth-subtitle">Access your SMRG account.</p>

          {error && <div className="auth-error">{error}</div>}

          <form onSubmit={handleLogin} className="auth-form">
            <Input
              label="Email"
              type="email"
              name="email"
              placeholder="Enter your email"
              required
            />
            <Input
              label="Password"
              type="password"
              name="password"
              placeholder="Enter your password"
              required
            />
            <button
              type="submit"
              className="btn btn-primary auth-btn"
              disabled={isLoading}
            >
              {isLoading ? "Logging in..." : "Login"}
            </button>
          </form>

          <p className="auth-footer">
            New here? <Link href="/register" className="auth-link">Create an account</Link>
          </p>
        </div>
      </Container>
    </section>
  );
}
