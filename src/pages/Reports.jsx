import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function Reports() {
  return (
    <div className="d-flex">
      <Sidebar />

      <div className="flex-grow-1 bg-light">
        <Navbar />

        <div className="container mt-4">
          <div className="card shadow">
            <div className="card-body text-center">
              <h2>Reports Module</h2>
              <p className="text-muted">
                Sales, Lead and Performance Reports will be available here.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Reports;