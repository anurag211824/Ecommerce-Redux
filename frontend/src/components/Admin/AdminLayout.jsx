import { useState } from "react";
import { FaBars } from "react-icons/fa";
import AdminSideBar from "./AdminSideBar";
import { Outlet } from "react-router-dom";
const AdminLayout = () => {
  const [issidebarOpen, setSideBarOpen] = useState(false);
  const toggleSidebar = () => {
    setSideBarOpen(!issidebarOpen);
  };
  return (
    <div className="min-h-screen flex flex-col md:flex-row relative">
      {/* Mobile Toggle Button */}
      <div className="flex md:hidden p-4 bg-gray-900 text-white z-20">
        <button onClick={toggleSidebar}>
          <FaBars size={25} />
        </button>
        <h1 className="ml-4 text-xl font-medium">Admin DashBoard</h1>
      </div>
      {/* OverLay for mobile sideBar */}
      {issidebarOpen && (
        <div className="fixed inset-0 z-10 md:hidden" onClick={toggleSidebar}>
        </div>
      )}
      {/* sidebar */}
      <div className={`bg-gray-900 w-64 min-h-screen text-white absolute md:relative transform ${issidebarOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 md:translate-x-0 md:static md:block z-20 `}>
        <AdminSideBar/>
      </div>
      {/* main content */}
      <div className="flex-grow p-6 overflow-auto">
        <Outlet/>
      </div>
    </div>
  );
};

export default AdminLayout;
