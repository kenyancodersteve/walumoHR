import { useEffect, useState } from "react";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import JobsList from "./components/JobsList";
import JobForm from "./components/JobForm";
import RoleBadge from "./components/RoleBadge";
import MyPostedJobs from "./components/MyPostedJobs";
import ReviewList from "./components/ReviewList"; // ✅ NEW
import MyAcceptedJobs from "./components/MyAcceptedJobs";

// inside renderContent()



export default function Dashboard({ role }) {
  const [user, setUser] = useState(null);
  const [view, setView] = useState(""); // ✅ will switch views

  useEffect(() => {
    return onAuthStateChanged(auth, setUser);
  }, []);

  useEffect(() => {
    if (role === "worker") setView("jobs");
    if (role === "contractor") setView("form");
  }, [role]);

  const renderContent = () => {
    if (role === "worker" && view === "jobs") return <JobsList />;
    if (role === "contractor" && view === "form") return <JobForm />;
    if (role === "worker" && view === "accepted") return <MyAcceptedJobs />;
    if (role === "contractor" && view === "myJobs") return <MyPostedJobs />;
    if (view === "reviews") return <ReviewList userId={user.uid} role={role} />; // ✅ Show reviews
    return null;
  };

  return user ? (
    <div className="dashboard">
      <header className="dashboard-header sticky-banner">
        <h3>
          Welcome {user.displayName} <RoleBadge role={role} />
          <button onClick={() => signOut(auth)} className="submit-btn" style={{ marginLeft: "10rem" }}>
            Log Out
          </button>
        </h3>
      </header>

      <nav className="dashboard-nav">
        {role === "worker" && (
          <>
            <button onClick={() => setView("jobs")}>Available Jobs</button>
            <button onClick={() => setView("accepted")}>My Accepted Jobs</button>
            <button onClick={() => setView("reviews")}>My Reviews</button> {/* ✅ */}
          </>
        )}
        {role === "contractor" && (
          <>
            <button onClick={() => setView("form")}>Post Job</button>
            <button onClick={() => setView("myJobs")}>My Jobs</button>
            <button onClick={() => setView("reviews")}>My Reviews</button> {/* ✅ */}
          </>
        )}
      </nav>

      <main className="dashboard-content">{renderContent()}</main>
    </div>
  ) : null;
}
