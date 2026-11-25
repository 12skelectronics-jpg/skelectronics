import { Star, ExternalLink, PenLine, Quote } from "lucide-react";
import { SHOP, REVIEWS } from "../data.js";
import { CtaBand } from "../components.jsx";

function Stars({ size = 18 }) {
  return (
    <div className="stars" aria-label="5 stars">
      {[0, 1, 2, 3, 4].map((i) => <Star key={i} size={size} fill="currentColor" strokeWidth={0} />)}
    </div>
  );
}

export default function Reviews() {
  return (
    <>
      <section className="hero hero-simple">
        <div className="container">
          <p className="eyebrow">Customer Reviews</p>
          <h1>What Our Customers Say</h1>
          <p className="lead">
            Customers across Shivamogga trust SK Electronics with their devices and training. Here's what they say on Google.
          </p>
          <div className="rating-badge">
            <strong>{SHOP.rating}</strong>
            <div>
              <Stars />
              <span>{SHOP.reviewCount} reviews on Google</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-2">
            {REVIEWS.map((r) => (
              <article key={r.name} className="card review">
                <Quote size={22} className="quote" />
                <p>{r.text}</p>
                <Stars size={16} />
                <div className="review-author">
                  <span className="avatar">{r.name[0]}</span>
                  <div>
                    <b>{r.name}</b>
                    <small>Google review</small>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="btn-row center">
            <a className="btn btn-primary" href={SHOP.reviewsUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink size={16} /> Read all {SHOP.reviewCount} reviews on Google
            </a>
            <a className="btn btn-outline" href={SHOP.reviewsUrl} target="_blank" rel="noopener noreferrer">
              <PenLine size={16} /> Write a Review
            </a>
          </div>
        </div>
      </section>

      <CtaBand title="Experience the SK Electronics Difference" text="Bring your device in and see why customers keep coming back." />
    </>
  );
}
