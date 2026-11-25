import { Star, ExternalLink, PenLine } from "lucide-react";
import { SHOP } from "../data.js";
import { CtaBand } from "../components.jsx";

export default function Reviews() {
  return (
    <>
      <section className="hero hero-simple">
        <div className="container">
          <p className="eyebrow">Customer Reviews</p>
          <h1>What Our Customers Say</h1>
          <p className="lead">
            Our customers share their experiences on Google. Read genuine reviews from people in Shivamogga who trusted
            SK Electronics with their devices.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="reviews-card">
            <div className="stars" aria-hidden="true">
              {[0, 1, 2, 3, 4].map((i) => <Star key={i} size={28} fill="currentColor" strokeWidth={0} />)}
            </div>
            <h2>Read our reviews on Google</h2>
            <p className="muted">See what customers say about our repairs, pricing, and service — straight from our Google listing.</p>
            <div className="btn-row center">
              <a className="btn btn-primary" href={SHOP.reviewsUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink size={16} /> See Google Reviews
              </a>
              <a className="btn btn-outline" href={SHOP.reviewsUrl} target="_blank" rel="noopener noreferrer">
                <PenLine size={16} /> Write a Review
              </a>
            </div>
          </div>
        </div>
      </section>

      <CtaBand title="Experience the SK Electronics Difference" text="Bring your device in and see why customers keep coming back." />
    </>
  );
}
