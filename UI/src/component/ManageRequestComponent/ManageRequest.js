import './ManageRequest.css';
import '../../styles/adminTheme.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { ngoApi } from '../../apiurl';
import { rescueApi } from '../../apiurl';
import { useNavigate } from 'react-router-dom';

function ManageRequest() {
  const navigate = useNavigate();
  const [reqDetail, setreqDetail] = useState([]);
  const _id = localStorage.getItem('_id');

  useEffect(() => {
    axios.get(`${rescueApi}fetch?assignedNgo=${_id}`).then((response) => {
      setreqDetail(response.data.rescue || []);
      console.log("Fetched requests:", response.data.rescue);
    }).catch((err) => {
      console.log(err);
    });
  }, []);

  const ChangeStatus = (id, currentStatus) => {
    let nextStatus;
    if (currentStatus === "pending") nextStatus = "in-progress";
    else if (currentStatus === "in-progress") nextStatus = "resolved";
    else return;

    const updateDetail = {
      condition_obj: { _id: id },
      content_obj: { status: nextStatus }
    };

    axios.patch(rescueApi + "update", updateDetail)
      .then(() => {
        alert(`Status updated to ${nextStatus}`);
        window.location.reload(); // Refresh the data
      })
      .catch(() => {
        alert("Failed to update status");
      });
  };

  const handleDelete = (_id) => {
    axios.delete(rescueApi + "delete", {
      data: { condition_obj: JSON.stringify({ _id }) }
    }).then(() => {
      alert("Request deleted successfully");
      window.location.reload();
    }).catch((err) => {
      console.log(err);
      alert("Failed to delete request");
    });
  };

  return (
    <main>
      <section className="section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-xl-12">
              <div className="table-responsive bg-light p-4 rounded shadow-sm">
                <h3 className="text-center mb-4" style={{ color: "#7B4019" }}>Request Approval Panel</h3>

                <table className="table table-bordered table-hover align-middle text-center">
                  <thead className="table-light">
                    <tr>
                      <th>Req ID</th>
                      <th>Address</th>
                      <th>Info</th>
                      <th>Mobile</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Array.isArray(reqDetail) && reqDetail.map((row) => (
                      <tr key={row._id}>
                        <td>{row._id}</td>
                        <td>{row.location}</td>
                        <td>{row.createdAt}</td>
                        <td>{row.mobile}</td>
                        <td>
                          <span className={`badge ${row.status === "pending"
                            ? "bg-warning text-dark"
                            : row.status === "in-progress"
                              ? "bg-info"
                              : "bg-success"
                            }`}>
                            {row.status}
                          </span>
                        </td>
                        <td>
                          {row.status !== "resolved" && (
                            <button
                              className="btn btn-sm btn-outline-primary me-2"
                              onClick={() => ChangeStatus(row._id, row.status)}
                            >
                              {row.status === "pending" ? "Mark In-Progress" : "Mark Resolved"}
                            </button>
                          )}
                          <button
                            className="btn btn-sm btn-outline-danger"
                            onClick={() => handleDelete(row._id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                {reqDetail.length === 0 && (
                  <p className="text-center text-muted mt-4">No request found.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ManageRequest;