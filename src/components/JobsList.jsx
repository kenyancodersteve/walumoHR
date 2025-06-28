import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  updateDoc,
  doc,
  serverTimestamp,
} from "firebase/firestore";
import { db, auth } from "../firebase";

export default function JobsList() {
  const [jobs, setJobs] = useState([]);

  const fetchJobs = async () => {
    const snapshot = await getDocs(collection(db, "jobs"));
    const filtered = snapshot.docs
      .map((doc) => ({ id: doc.id, ...doc.data() }))
      .filter((job) => (job.acceptedBy?.length || 0) < job.slots); // Exclude filled jobs
    setJobs(filtered);
  };

  const acceptJob = async (job) => {
    const user = auth.currentUser;
    if (!user) return alert("Login required.");

    const acceptedBy = job.acceptedBy || [];

    if (acceptedBy.includes(user.uid)) {
      return alert("You have already accepted this job.");
    }

    if (acceptedBy.length >= job.slots) {
      return alert("Job slots are full.");
    }

    try {
      const updatedList = [...acceptedBy, user.uid];
      await updateDoc(doc(db, "jobs", job.id), {
        acceptedBy: updatedList,
        acceptedAt: serverTimestamp(),
      });
      alert("Job accepted!");
      fetchJobs(); // Refresh job list
    } catch (err) {
      console.error("Error accepting job:", err);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div className="job-section">
      <h4 className="section-title">Available Jobs</h4>
      <ul className="job-list">
        {jobs.map((job) => (
          <li className="job-card" key={job.id}>
            <div className="job-info">
              <strong className="job-title">{job.title}</strong>
              <em className="job-location">{job.location}</em>
              <p className="job-status">
                {job.acceptedBy?.length || 0} / {job.slots} filled
              </p>
            </div>
            <button className="submit-btn" onClick={() => acceptJob(job)}>
              Accept Job
            </button>
          </li>
        ))}
        {jobs.length === 0 && (
          <p style={{ textAlign: "center", marginTop: "20px" }}>
            No available jobs at the moment.
          </p>
        )}
      </ul>
    </div>
  );
}
