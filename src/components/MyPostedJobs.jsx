import { useEffect, useState } from "react";
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  getDoc,
} from "firebase/firestore";
import { auth, db } from "../firebase";
import LeaveReview from "./LeaveReview";

export default function MyPostedJobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState({}); // { jobId: { userId: true } }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (!user) {
        setJobs([]);
        setLoading(false);
        return;
      }

      try {
        const q = query(
          collection(db, "jobs"),
          where("createdBy", "==", user.uid)
        );
        const snapshot = await getDocs(q);

        const jobsData = await Promise.all(
          snapshot.docs.map(async (docSnap) => {
            const job = { id: docSnap.id, ...docSnap.data() };

            if (Array.isArray(job.acceptedBy) && job.acceptedBy.length > 0) {
              const userPromises = job.acceptedBy.map(async (uid) => {
                const userDoc = await getDoc(doc(db, "users", uid));
                return userDoc.exists()
                  ? { uid, name: userDoc.data().name || uid }
                  : { uid, name: uid };
              });
              job.acceptedByDetails = await Promise.all(userPromises);
            } else {
              job.acceptedByDetails = [];
            }

            return job;
          })
        );

        setJobs(jobsData);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      } finally {
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const toggleCollapse = (jobId, userId) => {
    setExpanded((prev) => ({
      ...prev,
      [jobId]: {
        ...prev[jobId],
        [userId]: !prev?.[jobId]?.[userId],
      },
    }));
  };

  return (
    <div className="my-jobs-section">
      <h4 className="section-title">My Jobs</h4>

      {loading ? (
        <p className="info-text">Loading jobs...</p>
      ) : jobs.length === 0 ? (
        <p className="info-text">No jobs posted yet.</p>
      ) : (
        <ul className="job-list">
          {jobs.map((job) => (
            <li className="job-card" key={job.id}>
              <div className="job-header">
                <strong className="job-title">{job.title}</strong>
                <span className="job-location">{job.location}</span>
              </div>

              <p className="job-filled">
                Filled: {job.acceptedByDetails?.length || 0} / {job.slots}
              </p>

              {job.acceptedByDetails.length > 0 ? (
                <div className="accepted-list">
                  <p className="accepted-label">Accepted by:</p>
                  <ul>
                    {job.acceptedByDetails.map((entry, idx) => {
                      const isOpen = expanded?.[job.id]?.[entry.uid];
                      return (
                        <li key={idx} className="accepted-user">
                          <p>
                            <strong>{entry.name}</strong>{" "}
                            <button
                              className="toggle-review-btn"
                              onClick={() => toggleCollapse(job.id, entry.uid)}
                            >
                              {isOpen ? "Hide Review" : "Leave Review"}
                            </button>
                          </p>
                          {isOpen && (
                            <div className="review-collapse">
                              <LeaveReview jobId={job.id} toUserId={entry.uid} />
                            </div>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ) : (
                <p className="job-pending">Not yet accepted</p>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
