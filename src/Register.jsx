import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "./firebase";
import { doc, setDoc } from "firebase/firestore";
import { db } from "./firebase";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("worker"); // default to worker


  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredential.user, { displayName: name });
      alert("Registration complete!");
      // After creating the user and setting display name
        await setDoc(doc(db, "users", userCredential.user.uid), {
        name,
        email,
        role
        });

    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <form onSubmit={handleRegister} className="form">
      <h2>Register</h2>
      <input placeholder="Full Name" onChange={e => setName(e.target.value)} />
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
        <select onChange={(e) => setRole(e.target.value)} value={role}>
        <option value="worker">Worker</option>
        <option value="contractor">Contractor</option>
        </select>

      <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
      <button type="submit" className="submit-btn">Register</button>
    </form>
  );
}
