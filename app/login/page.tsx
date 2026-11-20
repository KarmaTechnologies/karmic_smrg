"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Container from "@/components/layout/Container";
import Input from "@/components/ui/Input";
import { login } from "@/lib/api";
import { setToken, setUser, isAuthenticated } from "@/lib/auth";

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [debugInfo, setDebugInfo] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated()) {
      router.replace("/dashboard");
    }
  }, [router]);

  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setDebugInfo(null);

    try {
      const formData = new FormData(e.currentTarget);
      const email = formData.get("email");
      const password = formData.get("password");

      if (!email || !password) {
        setError("Please fill in all fields");
        return;
      }

      console.log("Login attempt:", { email, password });

      const result = await login({
        email: email.toString(),
        password: password.toString(),
      });

      console.log("Login result:", result);

      if (!result.ok) {
        const detail = result.status ? ` (HTTP ${result.status})` : "";
        setError(result.error + detail);
        setDebugInfo(
          `Error: ${result.error}\nStatus: ${result.status ?? "N/A"}\nBody: ${JSON.stringify(result.body, null, 2)}`
        );
        return;
      }

      // Store the auth token and user data if the API returned them.
      // Note: the API may return { ok: true, data: {} } with no token/user.
      // We still mark the session as authenticated when ok is true.
      if (result.ok) {
        if (result.data?.token) {
          setToken(result.data.token);
          console.log("Token stored:", result.data.token);
        } else {
          setToken(""); // marks session as authenticated even without a token
        }
        if (result.data?.user) {
          setUser(result.data.user);
          console.log("User stored:", result.data.user);
        }
      }

      // Redirect to dashboard after successful login.
      router.push("/dashboard");
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Login failed";
      setError(msg);
      setDebugInfo(msg);
      console.error("Login error:", err);
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

          {debugInfo && process.env.NODE_ENV === "development" && (
            <div className="auth-error" style={{ fontSize: "0.85rem", opacity: 0.8 }}>
              <details style={{ marginTop: "0.5rem" }}>
                <summary>Debug info</summary>
                <pre>{debugInfo}</pre>
              </details>
            </div>
          )}

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
