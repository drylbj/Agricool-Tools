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
  const navigate = useNavigate();
  const { loginAs } = useAuth();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setShowRoleModal(true);
  };

  const handleRoleSelect = (role: Role) => {
    loginAs(role);
    navigate(role === "admin" ? "/admin" : "/farmer");
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
                <input placeholder="Saint John Tuquero" />
              </div>
            </label>
          )}

          <label>
            Phone number
            <div className="input-with-icon">
              <Phone size={19} />
              <input type="tel" placeholder="09XX XXX XXXX" />
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

          <button className="submit-button" type="submit">
            {tab === "login" ? "Log in" : "Create Account"} <span>→</span>
          </button>

          <div className="continue-divider">
            <span>or continue with</span>
          </div>
          <div className="social-row">
            <button type="button">G&nbsp; Google</button>
            <button type="button">◎&nbsp; Facebook</button>
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
