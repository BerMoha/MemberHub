"use client";

import { useEffect } from "react";

export default function AutoLogin() {
  useEffect(() => {
    const token = localStorage.getItem("memberhub_token");
    if (!token) {
      const admin = {
        email: "berkanimoha@gmail.com",
        name: "Admin",
        role: "admin",
        plan: "Enterprise",
        joined: "Jul 19, 2026",
      };
      localStorage.setItem("memberhub_token", "demo_token_admin");
      localStorage.setItem("memberhub_user", JSON.stringify(admin));
      window.location.reload();
    }
  }, []);

  return null;
}
