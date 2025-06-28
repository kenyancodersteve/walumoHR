import { useEffect, useState } from "react";
import { collection, getDocs, updateDoc, doc, serverTimestamp } from "firebase/firestore";
import { db, auth } from "../firebase";

export default function JobsList() {
  const [jobs, setJobs] = useState([]);

  const fetchJobs = async () => {
    const snapshot = await getDocs(collection(db, "jobs"));
    setJobs(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
  };

  const acceptJob = async (job) => {
    const user = auth.currentUser;
    if (!user) return alert("Login required.");
    if (!job.acceptedBy) job.acceptedBy = [];

    if (job.acceptedBy.includes(user.uid)) {
      return alert("You have already accepted this job.");
    }

    if (job.acceptedBy.length >= job.slots) {
      return alert("Job slots are full.");
    }

    try {
      const updatedList = [...job.acceptedBy, user.uid];
      await updateDoc(doc(db, "jobs", job.id), {
        acceptedBy: updatedList,
        acceptedAt: serverTimestamp()
      });
      alert("Job accepted!");
      fetchJobs();
    } catch (err) {
      console.error("Error accepting job:", err);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div>
      <h4>Available Jobs</h4>
      <ul style={{ paddingLeft: 0 }}>
        {jobs.map(job => {
          const isFull = job.acceptedBy?.length >= job.slots;
          return (
            <li key={job.id} style={{
              background: "#f9f9f9",
              marginBottom: "8px",
              padding: "10px 12px",
              borderRadius: "6px",
              listStyle: "none"
            }}>
              <strong>{job.title}</strong> – <em>{job.location}</em>
              <p>{job.acceptedBy?.length || 0} / {job.slots} filled</p>
              {isFull ? (
                <p style={{ color: "gray" }}>All slots filled</p>
              ) : (
                <button
                  onClick={() => acceptJob(job)}
                  className="submit-btn"
                  style={{ marginTop: "6px" }}
                >
                  Accept Job
                </button>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
