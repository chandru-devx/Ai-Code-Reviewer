import { FaBars } from "react-icons/fa";
import { FiCpu } from "react-icons/fi";

const Topbar = ({ onToggleSidebar, isDark }) => {
  return (
    <header
      style={{
        height: "72px",
        background: isDark ? "#111827" : "#ffffff",
        color: isDark ? "white" : "#111827",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 20px",
        borderBottom: isDark
          ? "1px solid #1f2937"
          : "1px solid #e5e7eb",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
        <FaBars
          size={20}
          style={{ cursor: "pointer" }}
          onClick={onToggleSidebar}
        />

        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <FiCpu size={18} />
          <h3>AI Reviewer</h3>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
