import { useState } from "react";

function FilterPanel({ leads, setFilteredLeads }) {
  const [status, setStatus] = useState("");
  const [employee, setEmployee] = useState("");
  const [date, setDate] = useState("");

  const applyFilters = (newStatus, newEmployee, newDate) => {
    let filtered = [...leads];

    if (newStatus !== "") {
      filtered = filtered.filter(
        (lead) => lead.status === newStatus
      );
    }

    if (newEmployee !== "") {
      filtered = filtered.filter(
        (lead) => lead.employee === newEmployee
      );
    }

    if (newDate !== "") {
      filtered = filtered.filter(
        (lead) => lead.createdDate === newDate
      );
    }

    setFilteredLeads(filtered);
  };

  const resetFilters = () => {
    setStatus("");
    setEmployee("");
    setDate("");
    setFilteredLeads(leads);
  };

  return (
    <div className="row mb-4">

      <div className="col-md-3 mb-2">
        <select
          className="form-select"
          value={status}
          onChange={(e) => {
            setStatus(e.target.value);
            applyFilters(e.target.value, employee, date);
          }}
        >
          <option value="">All Status</option>
          <option value="New">New</option>
          <option value="Contacted">Contacted</option>
          <option value="Converted">Converted</option>
        </select>
      </div>

      <div className="col-md-3 mb-2">
        <select
          className="form-select"
          value={employee}
          onChange={(e) => {
            setEmployee(e.target.value);
            applyFilters(status, e.target.value, date);
          }}
        >
          <option value="">All Employees</option>
          <option value="John">John</option>
          <option value="David">David</option>
        </select>
      </div>

      <div className="col-md-3 mb-2">
        <input
          type="date"
          className="form-control"
          value={date}
          onChange={(e) => {
            setDate(e.target.value);
            applyFilters(status, employee, e.target.value);
          }}
        />
      </div>

      <div className="col-md-3 mb-2">
        <button
          className="btn btn-secondary w-100"
          onClick={resetFilters}
        >
          Reset Filters
        </button>
      </div>

    </div>
  );
}

export default FilterPanel;