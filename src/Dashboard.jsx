import { useEffect, useState } from "react";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import JobsList from "./components/JobsList";
import JobForm from "./components/JobForm";
import RoleBadge from "./components/RoleBadge";
import MyPostedJobs from "./components/MyPostedJobs";

export default function Dashboard({ role }) {
  const [user, setUser] = useState(null);
  console.log(user)

  useEffect(() => {
    return onAuthStateChanged(auth, setUser);
  }, []);

  return user ? (
    <div style={{ maxWidth: "500px", margin: "auto", padding: "1rem" }}>
      <h3>Welcome to our app {user.displayName} <RoleBadge role={role} /></h3>

      {role === "worker" && <JobsList />}
      {role === "contractor" && (
        <>
          <JobForm />
          <MyPostedJobs />  {/* ← here */}
        </>
      )}

      <button onClick={() => signOut(auth)} className="submit-btn" style={{ marginTop: "2rem" }}>
        Log Out
      </button>
    </div>
  ) : null;
}
