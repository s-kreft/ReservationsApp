import Image from "next/image";
import RegistrationForm from "./registration/RegistrtationForm";
import Login from "./login/Login";
import BookingForm from "./reservation/BookingForm";
import MainDashboard from "./MainDashboard";
import NavBar from "./components/NavBar";
import { useEffect, useState, createContext } from "react";
import credentials from "@/app/data/credentials.json";
import { User } from "@/app/types";

type UserContextType = {
  users: User[];
};
export const UserContext = createContext<UserContextType>({ users: [] });

export default function Home() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const loadedUsers = credentials as User[];

    setUsers(loadedUsers);
  }, []);
  return (
    <UserContext.Provider value={{ users }}>
      <NavBar></NavBar>
      <MainDashboard></MainDashboard>
    </UserContext.Provider>
  );
}
