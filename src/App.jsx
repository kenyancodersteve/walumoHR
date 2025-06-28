import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";

import Login from "./Login";
import Register from "./Register";
import Dashboard from "./Dashboard";

function App() {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const [showLogin, setShowLogin] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        const userDoc = await getDoc(doc(db, "users", currentUser.uid));
        if (userDoc.exists()) {
          setRole(userDoc.data().role);
        }
      } else {
        setRole(null);
      }
    });

    return () => unsub();
  }, []);

  return (
    <div>
      {user ? (
        <Dashboard role={role} />
      ) : (
        <>
          {showLogin ? <Login /> : <Register />}
          <p className="toggle-text">
            {showLogin ? (
              <>
                Don't have an account?{" "}
                <span onClick={() => setShowLogin(false)} className="toggle-link">Register</span>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <span onClick={() => setShowLogin(true)} className="toggle-link">Login</span>
              </>
            )}
          </p>
        </>
      )}
    </div>
  );
}

export default App;
