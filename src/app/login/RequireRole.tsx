import React from "react";
import { useAuth } from "./AuthProvider";
import { UserRole } from "../types";
import { auth } from "@/auth";
import { User } from "next-auth";

export const RequireRole = async ({
  allowedRoles,
  children,
}: {
  allowedRoles: UserRole[];
  children: React.ReactNode;
}) => {
  // const { user } = useAuth();
  const session = await auth();

  if (!session || !allowedRoles.includes(session.user.role as UserRole)) {
    return <div>Access Denied</div>;
  }
  return <>{children}</>;
};
