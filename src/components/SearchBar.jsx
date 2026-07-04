import { useState } from "react";

function SearchBar({ leads, setFilteredLeads }) {
  const [search, setSearch] = useState("");

  const handleSearch = (value) => {
    setSearch(value);

    const filtered = leads.filter((lead) =>
      lead.name.toLowerCase().includes(value.toLowerCase()) ||
      lead.mobile.includes(value) ||
      lead.email.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredLeads(filtered);
  };

  return (
    <div className="mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Search by Lead Name, Mobile or Email..."
        value={search}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;