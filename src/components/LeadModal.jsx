import Notes from "./Notes";

function LeadModal({ lead, onClose }) {
  if (!lead) return null;

  return (
    <div
      className="modal fade show d-block"
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content">

          <div className="modal-header">
            <h5 className="modal-title">Lead Details</h5>

            <button
              className="btn-close"
              onClick={onClose}
            ></button>

          </div>

          <div className="modal-body">

  <div className="row">

    <div className="col-md-6">
      <p><strong>Name:</strong> {lead.name}</p>
      <p><strong>Mobile:</strong> {lead.mobile}</p>
      <p><strong>Email:</strong> {lead.email}</p>
      <p><strong>Address:</strong> {lead.address}</p>
    </div>

    <div className="col-md-6">
      <p><strong>Course:</strong> {lead.course}</p>
      <p><strong>Source:</strong> {lead.source}</p>
      <p><strong>Employee:</strong> {lead.employee}</p>
      <p><strong>Status:</strong> {lead.status}</p>
      <p><strong>Created:</strong> {lead.createdDate}</p>
    </div>

  </div>

  <hr />

  <Notes lead={lead} />

</div>
          <div className="modal-footer">
            <button
              className="btn btn-secondary"
              onClick={onClose}
            >
              Close
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default LeadModal;
