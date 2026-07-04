function ErrorMessage() {
  return (
    <div className="alert alert-danger text-center mt-4">
      <h4>Unable to Fetch Leads</h4>
      <p>Please check if JSON Server is running.</p>
    </div>
  );
}

export default ErrorMessage;