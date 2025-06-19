import React from "react";
import Link from "next/link";

export default function AdminDashboard() {
  return (
    <div>
      Admin: Manage users, assign workers, view all reservations{" "}
      <Link href="/users">Tekst</Link>
    </div>
  );
}
