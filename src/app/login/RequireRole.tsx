import React from "react";
import { useAuth } from "./AuthProvider";
import { UserRole } from "../types";

export const RequireRole = ({
  allowedRoles,
  children,
}: {
  allowedRoles: UserRole[];
  children: React.ReactNode;
}) => {
  const { user } = useAuth();

  if (!user || !allowedRoles.includes(user.role)) {
    return <div>Access Denied</div>;
  }
  return <>{children}</>;
};
