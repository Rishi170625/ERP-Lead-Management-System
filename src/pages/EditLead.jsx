import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import api from "../services/api";

function EditLead() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [lead, setLead] = useState({
    name: "",
    mobile: "",
    email: "",
    status: "",
    employee: "",
  });

  useEffect(() => {
    loadLead();
  }, []);

  const loadLead = async () => {
    const res = await api.get(`/leads/${id}`);
    setLead(res.data);
  };

  const handleChange = (e) => {
    setLead({
      ...lead,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !lead.name ||
      !lead.mobile ||
      !lead.email ||
      !lead.status ||
      !lead.employee
    ) {
      alert("Please fill all fields");
      return;
    }

    if (!/^[0-9]{10}$/.test(lead.mobile)) {
      alert("Mobile number must be 10 digits");
      return;
    }

    await api.put(`/leads/${id}`, lead);

    alert("Lead Updated Successfully");

    navigate("/leads");
  };

  return (
    <div className="d-flex">
      <Sidebar />

      <div className="flex-grow-1 bg-light">

        <Navbar />

        <div className="container mt-4">

          <div className="card shadow">

            <div className="card-header">
              <h4>Edit Lead</h4>
            </div>

            <div className="card-body">

              <form onSubmit={handleSubmit}>

                <div className="mb-3">
                  <label>Name</label>
                  <input
                    className="form-control"
                    name="name"
                    value={lead.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label>Mobile</label>
                  <input
                    className="form-control"
                    name="mobile"
                    value={lead.mobile}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label>Email</label>
                  <input
                    className="form-control"
                    name="email"
                    value={lead.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label>Status</label>

                  <select
                    className="form-select"
                    name="status"
                    value={lead.status}
                    onChange={handleChange}
                  >
                    <option>New</option>
                    <option>Contacted</option>
                    <option>Converted</option>
                  </select>

                </div>

                <div className="mb-3">
                  <label>Employee</label>

                  <select
                    className="form-select"
                    name="employee"
                    value={lead.employee}
                    onChange={handleChange}
                  >
                    <option>John</option>
                    <option>David</option>
                  </select>

                </div>

                <button className="btn btn-primary">
                  Update Lead
                </button>

              </form>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default EditLead;