import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link, useLocation } from "react-router-dom";
import { FiCode, FiClock, FiSettings } from "react-icons/fi";

const SideBar = ({ collapsed, isDark }) => {
  const location = useLocation();

  const getItemStyle = (path) => {
    const active = location.pathname === path;

    return {
      backgroundColor: active
        ? isDark
          ? "#1f2937"
          : "#e5e7eb"
        : "transparent",
      color: isDark ? "white" : "#111827",
      borderRadius: "8px",
      margin: "4px 8px",
      transition: "all 0.2s",
    };
  };

  return (
    <Sidebar
      collapsed={collapsed}
      backgroundColor={isDark ? "#111827" : "#ffffff"}
      style={{ height: "100vh" }}
      rootStyles={{
        borderRight: isDark ? "none" : "1px solid #e5e7eb",
      }}
    >
      <Menu>
        <MenuItem>
        </MenuItem>

        <MenuItem
          icon={<FiCode size={18} />}
          component={<Link to="/review" />}
          style={getItemStyle("/review")}
        >
          Review Code
        </MenuItem>

        {/* <MenuItem
          icon={<FiClock size={18} />}
          component={<Link to="/history" />}
          style={getItemStyle("/history")}
        >
          History
        </MenuItem> */}

        {/* <MenuItem
          icon={<FiSettings size={18} />}
          component={<Link to="/settings" />}
          style={getItemStyle("/settings")}
        >
          Settings
        </MenuItem> */}

      </Menu>
    </Sidebar>
  );
};

export default SideBar;
