import { createContext, useContext, useMemo, useState } from "react";
import type { Role } from "../types";

interface AuthUser {
  name: string;
  role: Role;
}

interface AuthContextValue {
  user: AuthUser | null;
  loginAs: (role: Role) => void;
  signOut: () => void;
}

const defaultUsers: Record<Role, AuthUser> = {
  farmer: { name: "Aleana Bello", role: "farmer" },
  admin: { name: "Admin", role: "admin" },
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

const STORAGE_KEY = "agricool.session";

function readStoredUser(): AuthUser | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as AuthUser;
    if (parsed.role === "farmer" || parsed.role === "admin") return parsed;
    return null;
  } catch {
    return null;
  }
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(() => readStoredUser());

  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      loginAs: (role: Role) => {
        const nextUser = defaultUsers[role];
        setUser(nextUser);
        try {
          window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextUser));
        } catch {
          /* ignore storage errors (e.g. private browsing) */
        }
      },
      signOut: () => {
        setUser(null);
        try {
          window.localStorage.removeItem(STORAGE_KEY);
        } catch {
          /* ignore storage errors */
        }
      },
    }),
    [user],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within an AuthProvider");
  return ctx;
}
