import { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/requests")
      .then(res => setRequests(res.data));
  }, []);

  return (
    <div>
      <h2>Requests</h2>
      {requests.map(r => (
        <div key={r.id}>
          <p>{r.item_name} - {r.status}</p>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;