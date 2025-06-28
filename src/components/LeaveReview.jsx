import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db, auth } from "../firebase";

export default function LeaveReview({ jobId, toUserId, targetRole }) {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const from = auth.currentUser.uid;
    const colName = targetRole === "worker" ? "reviews_worker" : "reviews_contractor";

    try {
      await addDoc(collection(db, colName), {
        jobId,
        from,
        to: toUserId,
        rating,
        comment,
        createdAt: serverTimestamp()
      });
      alert("Review submitted!");
      setComment("");
      setRating(5);
    } catch (err) {
      console.error("Error adding review:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="review-form">
      <label>
        Rating:
        <select value={rating} onChange={(e) => setRating(Number(e.target.value))}>
          {[5, 4, 3, 2, 1].map((val) => (
            <option key={val} value={val}>{val} Star{val !== 1 && "s"}</option>
          ))}
        </select>
      </label>

      <textarea
        placeholder="Leave a comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        rows={3}
        required
      ></textarea>

      <button type="submit" className="submit-btn">Submit Review</button>
    </form>
  );
}
