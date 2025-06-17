"use client";
import React from "react";

import { signIn, signOut, useSession } from "next-auth/react";

export default function SignIn() {
  const session = useSession();

  if (session.status === "authenticated") {
    return (
      <button className="btn" onClick={() => signOut({ callbackUrl: "/" })}>
        {session.data.user?.name || session.data.user?.email}
      </button>
    );
  } else if (session.status === "loading") {
    return <button className="btn loading">Loading...</button>;
  }

  return (
    <button className="btn" onClick={() => signIn("github")}>
      Login
    </button>
  );
}
