import { Outlet } from "react-router-dom";
import Layout from "../components/AdminDashBoard/Layout";

const AdminDashboard = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};

export default AdminDashboard;
