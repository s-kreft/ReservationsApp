import MainDashboard from "./MainDashboard";
import NavBar from "./components/NavBar";
import UsersList from "./components/UsersList";

export default function Home() {
  return (
    <div>
      <MainDashboard></MainDashboard>
      <UsersList></UsersList>
    </div>
  );
}
