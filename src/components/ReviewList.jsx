import { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export default function ReviewList({ userId, role }) {
  const [reviews, setReviews] = useState([]);
  const colName = role === "worker" ? "reviews_contractor" : "reviews_worker";

  useEffect(() => {
    async function fetchReviews() {
      const q = query(collection(db, colName), where("to", "==", userId));
      const snapshot = await getDocs(q);
      setReviews(snapshot.docs.map(doc => doc.data()));
    }
    fetchReviews();
  }, [userId]);

return (
  <div className="review-list-container">
    <h4 className="review-title">Reviews</h4>
    
    {reviews.length === 0 ? (
      <p className="no-reviews">No reviews yet.</p>
    ) : (
      <ul className="review-list">
        {reviews.map((review, idx) => (
          <li key={idx} className="review-item">
            <div className="review-rating">{review.rating}★</div>
            <div className="review-comment">"{review.comment}"</div>
          </li>
        ))}
      </ul>
    )}
  </div>
);
}
