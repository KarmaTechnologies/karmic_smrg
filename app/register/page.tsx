"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Container from "@/components/layout/Container";
import Input from "@/components/ui/Input";
import { signup } from "@/lib/api";
import { setToken, setUser, isAuthenticated } from "@/lib/auth";

export default function RegisterPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [showThankYou, setShowThankYou] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated()) {
      router.replace("/dashboard");
    }
  }, [router]);

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

      const result = await signup({
        name: name.toString(),
        email: email.toString(),
        password: password.toString(),
      });

      if (!result.ok) {
        setError(result.error);
        return;
      }

      // Store token and user if the API returned them, then show thank-you popup.
      // Note: the API may return { ok: true, data: {} } with no token/user.
      if (result.ok) {
        if (result.data?.token) {
          setToken(result.data.token);
        } else {
          setToken(""); // marks session as authenticated even without a token
        }
        if (result.data?.user) {
          setUser(result.data.user);
        }
      }

      setShowThankYou(true);
      return;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Registration failed");
    } finally {
      setIsLoading(false);
    }
  }

  const handleCloseThankYou = () => {
    setShowThankYou(false);
    router.push("/login");
  };

  return (
    <section className="page-section">
      <Container>
        <div className="auth-card">
          <h1 className="auth-title">Register</h1>
          <p className="auth-subtitle">Create your SMRG account.</p>

          {error && <div className="auth-error">{error}</div>}

          {showThankYou && (
            <div className="auth-popup">
              <div className="auth-popup-box">
                <h2 className="auth-popup-title">Thank you for signing up!</h2>
                <p className="auth-popup-message">
                  Your account has been created successfully. Please log in to
                  continue.
                </p>
                <button
                  onClick={handleCloseThankYou}
                  className="btn btn-primary auth-popup-btn"
                >
                  Go to Login
                </button>
              </div>
            </div>
          )}

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
              disabled={isLoading || showThankYou}
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
