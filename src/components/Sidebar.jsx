import { NavLink } from "react-router-dom";
import { FaTachometerAlt, FaUsers, FaUserTie, FaChartBar, FaCog } from "react-icons/fa";

function Sidebar() {
  return (
    <div
      className="bg-dark text-white p-3"
      style={{ width: "250px", minHeight: "100vh" }}
    >
      <h3 className="text-center mb-4 text-info">
  ERP CRM
</h3>

      <ul className="nav flex-column">

        <li className="nav-item mb-2">
          <NavLink
            to="/"
            className="nav-link text-white"
          >
            <FaTachometerAlt className="me-2" />
            Dashboard
          </NavLink>
        </li>

        <li className="nav-item mb-2">
          <NavLink
            to="/leads"
            className="nav-link text-white"
          >
            <FaUsers className="me-2" />
            Leads
          </NavLink>
        </li>

        <li className="nav-item mb-2">
          <NavLink to="/employees" className="nav-link text-white">
            <FaUserTie className="me-2" />
            Employees
          </NavLink>
        </li>

        <li className="nav-item mb-2">
          <NavLink to="/reports" className="nav-link text-white">
            <FaChartBar className="me-2" />
            Reports
          </NavLink>
        </li>

        <li className="nav-item">
         <NavLink to="/settings" className="nav-link text-white">
            <FaCog className="me-2" />
            Settings
          </NavLink>
        </li>

      </ul>
    </div>
  );
}

export default Sidebar;