import { useState, useEffect } from "react";
import "./Dashboard.css";

function Dashboard({ user, onLogout }) {
  const [requests, setRequests] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    item_name: "",
    quantity: "",
    description: "",
    priority: "Medium",
    department_id: 1,
  });

  useEffect(() => {
    fetchRequests();
  }, []);

  const fetchRequests = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/requests");
      const data = await response.json();
      setRequests(data);
    } catch (err) {
      console.error("Error fetching requests:", err);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/requests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          user_id: user.id,
        }),
      });

      if (response.ok) {
        alert("Request submitted successfully!");
        setFormData({
          item_name: "",
          quantity: "",
          description: "",
          priority: "Medium",
          department_id: 1,
        });
        setShowForm(false);
        fetchRequests();
      }
    } catch (err) {
      alert("Error submitting request");
    }

    setLoading(false);
  };

  return (
    <div className="dashboard">
      {/* Header */}
      <header className="dashboard-header">
        <div className="header-content">
          <h1>Stock System Dashboard</h1>
          <div className="header-right">
            <span className="user-info">👤 {user.email}</span>
            <button className="logout-btn" onClick={onLogout}>
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="dashboard-main">
        <div className="container">
          {/* Welcome Section */}
          <section className="welcome-section">
            <h2>Welcome, {user.name}!</h2>
            <p>Role: <strong>{user.role}</strong></p>
          </section>

          {/* Action Button */}
          <section className="action-section">
            <button className="create-btn" onClick={() => setShowForm(!showForm)}>
              {showForm ? "Cancel" : "➕ Create New Request"}
            </button>
          </section>

          {/* Form Section */}
          {showForm && (
            <section className="form-section">
              <h3>Create New Request</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Item Name</label>
                    <input
                      type="text"
                      name="item_name"
                      placeholder="e.g., Laptop, Monitor"
                      value={formData.item_name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Quantity</label>
                    <input
                      type="number"
                      name="quantity"
                      placeholder="1"
                      value={formData.quantity}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group full-width">
                  <label>Description</label>
                  <textarea
                    name="description"
                    placeholder="Describe what you need..."
                    value={formData.description}
                    onChange={handleInputChange}
                    rows="3"
                    required
                  ></textarea>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Priority</label>
                    <select name="priority" value={formData.priority} onChange={handleInputChange}>
                      <option value="Low">Low</option>
                      <option value="Medium">Medium</option>
                      <option value="High">High</option>
                      <option value="Urgent">Urgent</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Department ID</label>
                    <input
                      type="number"
                      name="department_id"
                      value={formData.department_id}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <button type="submit" className="submit-btn" disabled={loading}>
                  {loading ? "Submitting..." : "Submit Request"}
                </button>
              </form>
            </section>
          )}

          {/* Requests Table */}
          <section className="requests-section">
            <h3>All Requests</h3>
            <div className="table-wrapper">
              <table className="requests-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Item Name</th>
                    <th>Quantity</th>
                    <th>Priority</th>
                    <th>Status</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  {requests.length > 0 ? (
                    requests.map((request) => (
                      <tr key={request.id}>
                        <td>#{request.id}</td>
                        <td><strong>{request.item_name}</strong></td>
                        <td>{request.quantity}</td>
                        <td>
                          <span className={`priority ${request.priority.toLowerCase()}`}>
                            {request.priority}
                          </span>
                        </td>
                        <td>
                          <span className={`status ${request.status.toLowerCase()}`}>
                            {request.status}
                          </span>
                        </td>
                        <td>{request.description}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="6" className="no-data">No requests yet</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
