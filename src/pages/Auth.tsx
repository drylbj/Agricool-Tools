import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ArrowLeft, Eye, EyeOff, LockKeyhole, Phone, Sprout, User } from "lucide-react";
import RoleModal from "../components/RoleModal";
import { useAuth } from "../context/AuthContext";
import type { Role } from "../types";

type Tab = "login" | "register";

export default function Auth() {
  const [searchParams] = useSearchParams();
  const initialTab: Tab = searchParams.get("tab") === "register" ? "register" : "login";
  const [tab, setTab] = useState<Tab>(initialTab);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [showRoleModal, setShowRoleModal] = useState(false);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { loginAs } = useAuth();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError("");

    if (tab === "register") {
      if (password !== confirmPassword) {
        setError("Passwords do not match.");
        return;
      }
      setShowRoleModal(true);
    } else {
      setLoading(true);
      try {
        const response = await fetch("http://localhost:5000/api/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ phone, password }),
        });
        const data = await response.json();

        if (!response.ok) {
          setError(data.message || "Login failed.");
          setLoading(false);
          return;
        }

        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));

        loginAs(data.user.role);
        navigate(data.user.role === "admin" ? "/admin" : "/farmer");
      } catch (err) {
        console.error(err);
        setError("Could not connect to server.");
      } finally {
        setLoading(false);
      }
    }
  };

  const handleRoleSelect = async (role: Role) => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, password, role }),
      });
      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Registration failed.");
        setLoading(false);
        setShowRoleModal(false);
        return;
      }

      setShowRoleModal(false);
      setTab("login");
      setError("Registration successful. Please log in.");
    } catch (err) {
      console.error(err);
      setError("Could not connect to server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="auth-screen">
      <div className="auth-brand-panel">
        <button className="back-arrow" onClick={() => navigate("/")}>
          <ArrowLeft size={22} />
        </button>
        <div className="brand-mark">
          <Sprout size={50} />
        </div>
        <p className="brand-panel-name">AgriCool-Tools</p>
      </div>

      <div className="auth-panel">
        <form className="auth-content" onSubmit={handleSubmit}>
          <p className="mini-brand">AgriCool-Tools</p>
          <h2>{tab === "login" ? "Sign In" : "Create Account"}</h2>
          <p className="auth-subtitle">
            {tab === "login"
              ? "Welcome back. Let's get growing"
              : "Join and start managing your farm smarter."}
          </p>

          {error && <p className="auth-error">{error}</p>}

          <div className="auth-tabs">
            <button
              type="button"
              className={tab === "login" ? "selected" : ""}
              onClick={() => setTab("login")}
            >
              Login
            </button>
            <button
              type="button"
              className={tab === "register" ? "selected" : ""}
              onClick={() => setTab("register")}
            >
              Register
            </button>
          </div>

          {tab === "register" && (
            <label>
              Full name
              <div className="input-with-icon">
                <User size={19} />
                <input
                  placeholder="Saint John Tuquero"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
            </label>
          )}

          <label>
            Phone number
            <div className="input-with-icon">
              <Phone size={19} />
              <input
                type="tel"
                placeholder="09XX XXX XXXX"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
          </label>

          <label>
            Password
            {tab === "login" && <span className="field-action">Forgot password?</span>}
            <div className="input-with-icon">
              <LockKeyhole size={19} />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="icon-button"
                onClick={() => setShowPassword(!showPassword)}
                aria-label="Toggle password visibility"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </label>

          {tab === "register" && (
            <label>
              Confirm Password
              <div className="input-with-icon">
                <LockKeyhole size={19} />
                <input
                  type={showConfirm ? "text" : "password"}
                  placeholder="••••••••••••"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="icon-button"
                  onClick={() => setShowConfirm(!showConfirm)}
                  aria-label="Toggle confirm password visibility"
                >
                  {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </label>
          )}

          {tab === "login" ? (
            <label className="check-row">
              <input type="checkbox" /> <span>Remember me</span>
            </label>
          ) : (
            <label className="check-row">
              <input type="checkbox" required />{" "}
              <span>I agree to the Terms and Privacy Policy</span>
            </label>
          )}

          <button className="submit-button" type="submit" disabled={loading}>
            {loading ? "Please wait..." : tab === "login" ? "Log in" : "Create Account"}
            <span>→</span>
          </button>

          <div className="continue-divider">
            <span>or continue with</span>
          </div>
          <div className="social-row">
            <button type="button">G&nbsp; Google</button>
            <button type="button">@&nbsp; Facebook</button>
          </div>
        </form>
      </div>

      {showRoleModal && (
        <RoleModal
          onSelect={handleRoleSelect}
          onClose={() => setShowRoleModal(false)}
        />
      )}
    </main>
  );
}