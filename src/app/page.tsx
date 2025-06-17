import Image from "next/image";
import RegistrationForm from "./registration/RegistrtationForm";
import Login from "./login/Login";
import BookingForm from "./reservation/BookingForm";
import MainDashboard from "./MainDashboard";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <>
      <NavBar></NavBar>
      <MainDashboard></MainDashboard>
    </>
  );
}
