import { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [isDark, setIsDark] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className="flex h-screen w-full">
      <Sidebar collapsed={collapsed} isDark={isDark} />

      <div className="flex flex-1 flex-col">
        <Topbar
          onToggleSidebar={toggleSidebar}
          isDark={isDark}
          setIsDark={setIsDark}
        />

        <main className="flex-1 p-6 overflow-auto min-h-0">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
