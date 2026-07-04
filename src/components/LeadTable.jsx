import { Link } from "react-router-dom";
import { FaEye, FaEdit } from "react-icons/fa";

function LeadTable({ leads, onView }) {
  return (
    <div className="card shadow">
      <div className="card-body">

        <div className="table-responsive">

          <table className="table table-hover table-striped table-bordered align-middle">

            <thead className="table-primary">
              <tr>
                <th>Name</th>
                <th>Mobile</th>
                <th>Email</th>
                <th>Status</th>
                <th>Employee</th>
                <th>Created</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>

              {leads.map((lead) => (

                <tr key={lead.id}>

                  <td>{lead.name}</td>

                  <td>{lead.mobile}</td>

                  <td>{lead.email}</td>

                  <td>
                    <span
                      className={`badge ${
                        lead.status === "New"
                          ? "bg-primary"
                          : lead.status === "Contacted"
                          ? "bg-warning text-dark"
                          : "bg-success"
                      }`}
                    >
                      {lead.status}
                    </span>
                  </td>

                  <td>{lead.employee}</td>

                  <td>{lead.createdDate}</td>

                  <td>

                    <button
                      className="btn btn-primary btn-sm"
                      onClick={() => onView(lead)}
                    >
                      <FaEye className="me-1" />
                      View
                    </button>

                    <Link
                      to={`/edit/${lead.id}`}
                      className="btn btn-warning btn-sm"
                    >
                      <FaEdit className="me-1" />
                      Edit
                    </Link>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>
    </div>
  );
}

export default LeadTable;