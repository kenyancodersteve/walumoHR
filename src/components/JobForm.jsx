import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db, auth } from "../firebase";

export default function JobForm({ onJobPosted }) {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [slots, setSlots] = useState(1);

  const handlePostJob = async (e) => {
    e.preventDefault();
    const user = auth.currentUser;
    if (!user) return alert("Login required.");

    try {
      await addDoc(collection(db, "jobs"), {
        title,
        location,
        createdAt: serverTimestamp(),
        createdBy: user.uid,
        slots: Number(slots),
        acceptedBy: [] // initialize as empty array
      });

      alert("Job posted!");
      setTitle("");
      setLocation("");
      setSlots(1);
      if (onJobPosted) onJobPosted();
    } catch (err) {
      console.error("Error posting job:", err);
    }
  };

 return (
  <form onSubmit={handlePostJob} className="job-post-form">
    <h4 className="form-title">Post a New Job</h4>

    <input
      type="text"
      placeholder="Job Title"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      required
      className="form-input"
    />

    <input
      type="text"
      placeholder="Location"
      value={location}
      onChange={(e) => setLocation(e.target.value)}
      required
      className="form-input"
    />

    <input
      type="number"
      placeholder="Number of Workers"
      value={slots}
      onChange={(e) => setSlots(e.target.value)}
      min={1}
      required
      className="form-input"
    />

    <button type="submit" className="submit-btn">
      Post Job
    </button>
  </form>
);
}