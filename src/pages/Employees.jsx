import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function Employees() {
  return (
    <div className="d-flex">
      <Sidebar />

      <div className="flex-grow-1 bg-light">
        <Navbar />

        <div className="container mt-4">
          <div className="card shadow">
            <div className="card-body text-center">
              <h2>Employees Module</h2>
              <p className="text-muted">
                Employee Management will be implemented in the next version.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Employees;