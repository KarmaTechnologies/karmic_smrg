"use client";

import Link from "next/link";
import { useState } from "react";
import Container from "@/components/layout/Container";
import Input from "@/components/ui/Input";

export default function RegisterPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleRegister(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const formData = new FormData(e.currentTarget);
      const name = formData.get("name");
      const email = formData.get("email");
      const password = formData.get("password");

      if (!name || !email || !password) {
        setError("Please fill in all fields");
        return;
      }

      if (password.toString().length < 6) {
        setError("Password must be at least 6 characters");
        return;
      }

      // TODO: Add your register API call here
      console.log("Register attempt:", { name, email, password });
      // Example: const response = await fetch("/api/register", { method: "POST", body: formData });
      alert("Registration functionality to be implemented with your backend");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Registration failed");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section className="page-section">
      <Container>
        <div className="auth-card">
          <h1 className="auth-title">Register</h1>
          <p className="auth-subtitle">Create your SMRG account.</p>

          {error && <div className="auth-error">{error}</div>}

          <form onSubmit={handleRegister} className="auth-form">
            <Input
              label="Full Name"
              name="name"
              placeholder="Enter your name"
              required
            />
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
              placeholder="Create password"
              required
            />
            <button
              type="submit"
              className="btn btn-primary auth-btn"
              disabled={isLoading}
            >
              {isLoading ? "Creating Account..." : "Create Account"}
            </button>
          </form>

          <p className="auth-footer">
            Already have an account? <Link href="/login" className="auth-link">Login</Link>
          </p>
        </div>
      </Container>
    </section>
  );
}
