function Pagination({
  currentPage,
  totalPages,
  setCurrentPage,
  recordsPerPage,
  setRecordsPerPage,
}) {
  return (
    <div className="d-flex justify-content-between align-items-center mt-3">

      <div>
        <select
          className="form-select"
          style={{ width: "120px" }}
          value={recordsPerPage}
          onChange={(e) => {
            setRecordsPerPage(Number(e.target.value));
            setCurrentPage(1);
          }}
        >
          <option value={10}>10</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
        </select>
      </div>

      <div>

        <button
          className="btn btn-secondary me-2"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Previous
        </button>

        <span className="fw-bold">
          Page {currentPage} of {totalPages}
        </span>

        <button
          className="btn btn-secondary ms-2"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </button>

      </div>

    </div>
  );
}

export default Pagination;