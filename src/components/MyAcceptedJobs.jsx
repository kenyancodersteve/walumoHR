import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  query,
  where,
  doc,
  getDoc,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { auth, db } from "../firebase";

export default function MyAcceptedJobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(5);
  const [selectedJobId, setSelectedJobId] = useState(null);

  const user = auth.currentUser;

  useEffect(() => {
    if (!user) return;

    const fetchJobs = async () => {
      try {
        const q = query(collection(db, "jobs"), where("acceptedBy", "array-contains", user.uid));
        const snapshot = await getDocs(q);

        const jobsWithDetails = await Promise.all(
          snapshot.docs.map(async (docSnap) => {
            const job = { id: docSnap.id, ...docSnap.data() };
            const contractorDoc = await getDoc(doc(db, "users", job.createdBy));
            job.contractorName = contractorDoc.exists() ? contractorDoc.data().name : "Unknown";
            return job;
          })
        );

        setJobs(jobsWithDetails);
      } catch (error) {
        console.error("Error fetching accepted jobs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, [user]);

  const handleReviewSubmit = async (jobId, contractorId) => {
    if (!reviewText.trim()) return alert("Please enter a comment.");

    try {
      await addDoc(collection(db, "reviews_worker"), {
        from: user.uid,
        to: contractorId,
        jobId,
        rating,
        comment: reviewText,
        createdAt: serverTimestamp(),
      });
      alert("Review submitted!");
      setSelectedJobId(null);
      setReviewText("");
      setRating(5);
    } catch (err) {
      console.error("Error submitting review:", err);
      alert("Failed to submit review.");
    }
  };

  return (
    <div className="my-jobs-section">
      <h4 className="section-title">My Accepted Jobs</h4>

      {loading ? (
        <p>Loading...</p>
      ) : jobs.length === 0 ? (
        <p>You haven't accepted any jobs yet.</p>
      ) : (
        <ul className="job-list">
          {jobs.map((job) => (
            <li key={job.id} className="job-card">
              <div className="job-header">
                <strong>{job.title}</strong> — <em>{job.location}</em>
              </div>
              <p>Posted by: {job.contractorName}</p>

              {selectedJobId === job.id ? (
                <div className="review-form">
                  <textarea
                    placeholder="Leave a review..."
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value)}
                  />
                  <select value={rating} onChange={(e) => setRating(Number(e.target.value))}>
                    {[5, 4, 3, 2, 1].map((r) => (
                      <option key={r} value={r}>
                        {r} Star{r > 1 ? "s" : ""}
                      </option>
                    ))}
                  </select>
                  <button onClick={() => handleReviewSubmit(job.id, job.createdBy)}>
                    Submit Review
                  </button>
                  <button onClick={() => setSelectedJobId(null)} style={{ marginLeft: "8px" }}>
                    Cancel
                  </button>
                </div>
              ) : (
                <button onClick={() => setSelectedJobId(job.id)}>Leave Review</button>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
