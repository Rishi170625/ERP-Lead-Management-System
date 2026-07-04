import { useEffect, useState } from "react";
import api from "../services/api";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import FilterPanel from "../components/FilterPanel";
import LeadTable from "../components/LeadTable";
import LeadModal from "../components/LeadModal";
import Pagination from "../components/Pagination";
import Loader from "../components/Loader";
import EmptyState from "../components/EmptyState";
import ErrorMessage from "../components/ErrorMessage";
import Footer from "../components/Footer";

function LeadList() {
  const [leads, setLeads] = useState([]);
  const [filteredLeads, setFilteredLeads] = useState([]);
  const [selectedLead, setSelectedLead] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(10);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Fetch Leads
  const fetchLeads = async () => {
    try {
      setLoading(true);

      const response = await api.get("/leads");

      setLeads(response.data);
      setFilteredLeads(response.data);

      setError(false);
    } catch (err) {
      console.error(err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  // Pagination
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;

  const currentLeads = filteredLeads.slice(firstIndex, lastIndex);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredLeads.length / recordsPerPage)
  );

  return (
    <div className="d-flex">

      <Sidebar />

      <div className="flex-grow-1 bg-light">

        <Navbar />

        <div className="container mt-4">

          <h3 className="mb-4">Lead Management</h3>

          <SearchBar
            leads={leads}
            setFilteredLeads={setFilteredLeads}
          />

          <FilterPanel
            leads={leads}
            setFilteredLeads={setFilteredLeads}
          />

          {loading ? (
            <Loader />
          ) : error ? (
            <ErrorMessage />
          ) : filteredLeads.length === 0 ? (
            <EmptyState />
          ) : (
            <>
              <LeadTable
                leads={currentLeads}
                onView={setSelectedLead}
              />

              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                setCurrentPage={setCurrentPage}
                recordsPerPage={recordsPerPage}
                setRecordsPerPage={setRecordsPerPage}
              />
            </>
          )}

          <LeadModal
            lead={selectedLead}
            onClose={() => setSelectedLead(null)}
          />
          <LeadModal
            lead={selectedLead}
            onClose={() => setSelectedLead(null)}
          />

<Footer />

        </div>

      </div>

    </div>
  );
}

export default LeadList;