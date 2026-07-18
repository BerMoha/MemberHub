"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [ok, setOk] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("memberhub_token");
    if (!token) { router.replace("/memberhub/signin"); return; }
    setOk(true);
  }, [router]);

  if (!ok) return null;
  return <>{children}</>;
}
