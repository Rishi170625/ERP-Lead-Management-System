import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import api from "../services/api";
import { Link } from "react-router-dom";

function Dashboard() {

  const [stats, setStats] = useState({
    total: 0,
    newLeads: 0,
    contacted: 0,
    converted: 0,
  });

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {
    const res = await api.get("/leads");

    const leads = res.data;

    setStats({
      total: leads.length,
      newLeads: leads.filter((l) => l.status === "New").length,
      contacted: leads.filter((l) => l.status === "Contacted").length,
      converted: leads.filter((l) => l.status === "Converted").length,
    });
  };
  return (
    <div className="d-flex">

      <Sidebar />

      <div className="flex-grow-1 bg-light">

        <Navbar />

        <div className="container mt-4">

          <div className="row">

           <div className="card bg-primary text-white shadow">
  <Link to="/leads" className="text-decoration-none">
    <div className="card shadow">
      <div className="card-body text-center">
        <h5>Total Leads</h5>
        <h2>{stats.total}</h2>
      </div>
    </div>
  </Link>
</div>

           <div className="card bg-info text-white shadow">
                <Link to="/leads" className="text-decoration-none">
              <div className="card shadow">
                <div className="card-body text-center">
                  <h5>New Leads</h5>
                  <h2>{stats.newLeads}</h2>
                </div>
              </div>
              </Link>
            </div>

            <div className="card bg-warning text-white shadow">
                <Link to="/leads" className="text-decoration-none">
              <div className="card shadow">
                <div className="card-body text-center">
                  <h5>Contacted</h5>
                  <h2>{stats.contacted}</h2>
                </div>
              </div>
              </Link>
            </div>

            <div className="card bg-success text-white shadow">
                  <Link to="/leads" className="text-decoration-none">
              <div className="card shadow">
                <div className="card-body text-center">
                  <h5>Converted</h5>
                  <h2>{stats.converted}</h2>
                </div>
              </div>
              </Link>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;