import { Navigate, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Auth from "./pages/Auth";
import FarmerLayout from "./layouts/FarmerLayout";
import Dashboard from "./pages/farmer/Dashboard";
import CropMonitoring from "./pages/farmer/CropMonitoring";
import Weather from "./pages/farmer/Weather";
import Assistant from "./pages/farmer/Assistant";
import InformationHub from "./pages/farmer/InformationHub";
import AdminLayout from "./layouts/AdminLayout";
import AdminOverview from "./pages/admin/Overview";
import ManageUsers from "./pages/admin/ManageUsers";
import CropRecords from "./pages/admin/CropRecords";
import AdminInformationHub from "./pages/admin/InformationHub";
import WeatherLogs from "./pages/admin/WeatherLogs";
import AssistantLogs from "./pages/admin/AssistantLogs";
import Reports from "./pages/admin/Reports";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/auth" element={<Auth />} />

      <Route path="/farmer" element={<FarmerLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="crop-monitoring" element={<CropMonitoring />} />
        <Route path="weather" element={<Weather />} />
        <Route path="assistant" element={<Assistant />} />
        <Route path="information-hub" element={<InformationHub />} />
      </Route>

      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminOverview />} />
        <Route path="users" element={<ManageUsers />} />
        <Route path="crop-records" element={<CropRecords />} />
        <Route path="information-hub" element={<AdminInformationHub />} />
        <Route path="weather-logs" element={<WeatherLogs />} />
        <Route path="assistant-logs" element={<AssistantLogs />} />
        <Route path="reports" element={<Reports />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
