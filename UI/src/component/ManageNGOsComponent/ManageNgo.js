import './ManageNgo.css';
import '../../styles/adminTheme.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { ngoApi } from '../../apiurl';
import { useNavigate } from 'react-router-dom';
function Managengo() {
    const navigate = useNavigate();
    const [ngoDetail, setngoDetail] = useState([]);
    useEffect(() => {
        axios.get(ngoApi + "fetch?role=ngo").then((response) => {
            setngoDetail(response.data.ngo);
        }).catch((err) => {
            console.log(err);
        });

    })
    const ChangeStatus = (_id, s) => {
        if (s == 'verify') {
            var updateDetail = { "condition_obj": { "_id": _id }, "content_obj": { "status": 1 } }

            axios.patch(ngoApi + "update", updateDetail).then((response) => {
                alert("ngo verified sucessfully");
                navigate("/managengo");
            }).catch(() => {
                alert("cant verified");
            })
        }


        else if (s == 'block') {
            var updateDetail = { "condition_obj": { "_id": _id }, "content_obj": { "status": 0 } }
            axios.patch(ngoApi + "update", updateDetail).then((response) => {
                alert("ngo blocked sucessfully");
                navigate("/managengo")
            }).catch(() => {
                alert("cant delete");
            })
        }

        else {
            var deleteDetail = { "data": { "_id": _id } }
            axios.delete(ngoApi + "delete", deleteDetail).then((response) => {
                alert("ngo deleted sucessfully");
                navigate("/managengo")
            }).catch((err) => {
                console.log(err);
                alert("cant delete");
            })

        }
    }
    return (
        <>

            <main>
               
                <section className="section-padding">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-12 col-12">
                                <div className="manage-ngo-panel table-responsive bg-light p-4 rounded shadow-sm">
                                    <h3 className="text-primary text-center mb-4">NGO Approval Panel</h3>

                                    <table className="table table-bordered table-hover align-middle text-center">
                                        <thead className="table-light">
                                            <tr>
                                                <th>NGO ID</th>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Address</th>
                                                <th>City</th>
                                                <th>Mobile</th>
                                                <th>Pincode</th>
                                                <th>Info</th>
                                                <th>Status</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {Array.isArray(ngoDetail) && ngoDetail.map((row) => (
                                                <tr key={row._id}>
                                                    <td>{row._id}</td>
                                                    <td>{row.name}</td>
                                                    <td>{row.email}</td>
                                                    <td>{row.address}</td>
                                                    <td>{row.city}</td>
                                                    <td>{row.mobile}</td>
                                                    <td>{row.pincode}</td>
                                                    <td>{row.info}</td>

                                                    <td>
                                                        {row.status === 0 ? (
                                                            <span className="badge bg-warning text-dark">Pending</span>
                                                        ) : (
                                                            <span className="badge bg-success">Approved</span>
                                                        )}
                                                    </td>

                                                    <td>
                                                        {row.status === 0 ? (
                                                            <button
                                                                className="btn btn-sm btn-outline-success me-2"
                                                                onClick={() => ChangeStatus(row._id, 'verify')}
                                                            >
                                                                Approve
                                                            </button>
                                                        ) : (
                                                            <button
                                                                className="btn btn-sm btn-outline-warning me-2"
                                                                onClick={() => ChangeStatus(row._id, 'block')}
                                                            >
                                                                Block
                                                            </button>
                                                        )}
                                                        <button
                                                            className="btn btn-sm btn-outline-danger"
                                                            onClick={() => ChangeStatus(row._id)}
                                                        >
                                                            Delete
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>

                                    {ngoDetail.length === 0 && (
                                        <p className="text-center text-muted mt-4">No NGOs found.</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </main>

        </>
    );
}
export default Managengo;