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

export default function MyPostedJobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

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

            // If there are acceptedBy UIDs, fetch their names
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

  return (
    <div>
      <h4>My Jobs</h4>

      {loading ? (
        <p>Loading jobs...</p>
      ) : jobs.length === 0 ? (
        <p>No jobs posted yet.</p>
      ) : (
        <ul style={{ paddingLeft: 0 }}>
          {jobs.map((job) => (
            <li
              key={job.id}
              style={{
                background: "#f9f9f9",
                marginBottom: "10px",
                padding: "10px",
                borderRadius: "6px",
                listStyle: "none",
              }}
            >
              <strong>{job.title}</strong> — <em>{job.location}</em>

              <p style={{ marginTop: "6px", color: "green" }}>
                Filled: {job.acceptedByDetails?.length || 0} / {job.slots}
              </p>

              {job.acceptedByDetails.length > 0 ? (
                <div>
                  <p>Accepted by:</p>
                  <ul style={{ paddingLeft: "20px" }}>
                    {job.acceptedByDetails.map((entry, idx) => (
                      <li key={idx}>{entry.name}</li>
                    ))}
                  </ul>
                </div>
              ) : (
                <p style={{ color: "gray" }}>Not yet accepted</p>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
