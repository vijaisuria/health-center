import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import Navbar from "./components/navbar/doctorNavbar";
import PrescriptionForm from "./components/forms/prescription/prescriptionForm";
import Prescriptions from "./components/prescription/prescriptions";
import Prescription from "./components/prescription/prescription";
import DoctorProfile from "./components/profile/docProfile";
import LoginForm from "./components/forms/authentication/login";
import AdminLoginForm from "./components/forms/authentication/adminLogin";
import Home from "./components/dashboard/home";
import Sidebar from "./components/navbar/sidebar";
import DoctorPage from "./components/ADMIN/doctor.page";
import AdminPage from "./components/ADMIN/admin.page";
import MedicinePage from "./components/ADMIN/medicines/medicine.page";
import NursePage from "./components/ADMIN/nurse.page";
import SupplierPage from "./components/ADMIN/supplier.page";
import AdminPanel from "./components/dashboard/adminDashboard";
import NurseRequestForm from "./components/forms/prescription/nurseRequestForm";
import DoctorDashboard from "./components/dashboard/doctorDashboard";
import PrescriptionEditForm from "./components/forms/prescription/prescriptionEditForm";
import Error404 from "./components/error/notfound";
import Error500 from "./components/error/error500";
import NurseNavBar from "./components/navbar/nurseNav";
import NurseProfile from "./components/profile/nurseProfile ";
import NurseDashboard from "./components/dashboard/nurseDashboard";
import Team from "./components/team/team";
import Footer from "./components/footer/footer";
import UserDashboard from "./components/dashboard/userDashboard";
import BookingPage from "./components/forms/appointment/booking";

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<LoginForm />} />

          <Route path="/user">
            <Route index element={<UserDashboard />} />
            <Route path="book" element={<BookingPage />} />
          </Route>

          <Route path="/doctor" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="create" element={<PrescriptionForm />} />
            <Route path="profile" element={<DoctorProfile />} />
            <Route path="requests" element={<DoctorDashboard />} />
            <Route path="prescriptions" element={<Prescriptions />} />
            <Route path="edit/:id" element={<PrescriptionEditForm />} />
          </Route>

          <Route path="/nurse" element={<NurseNavBar />}>
            <Route index element={<Home />} />
            <Route path="requests" element={<NurseDashboard />} />
            <Route path="create" element={<NurseRequestForm />} />
            <Route path="profile" element={<NurseProfile />} />
            <Route path="prescriptions" element={<Prescriptions />} />
          </Route>

          <Route path="/admin" element={<Sidebar />}>
            <Route index element={<AdminLoginForm />} />
            <Route path="dashboard" element={<AdminPanel />} />
            <Route path="admins" element={<AdminPage />} />
            <Route path="supplier" element={<SupplierPage />} />
            <Route path="nurse" element={<NursePage />} />
            <Route path="medicine" element={<MedicinePage />} />
            <Route path="doctor" element={<DoctorPage />} />
          </Route>

          <Route path="/prescriptions/:id" element={<Prescription />} />

          <Route path="/team" element={<Team />} />
          <Route path="/error" element={<Error500 />} />
          <Route path="*" element={<Error404 />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
