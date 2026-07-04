import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function Settings() {
  return (
    <div className="d-flex">
      <Sidebar />

      <div className="flex-grow-1 bg-light">
        <Navbar />

        <div className="container mt-4">
          <div className="card shadow">
            <div className="card-body text-center">
              <h2>Settings</h2>
              <p className="text-muted">
                ERP Configuration and User Preferences.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Settings;