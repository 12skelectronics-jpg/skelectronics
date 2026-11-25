import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";
import { SERVICES, WHY, TRAINING } from "../data.js";
import { Logo, Photo, CallButton, DirectionsButton, SectionHead, Card, CtaBand } from "../components.jsx";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <Logo />
            <p className="location"><MapPin size={14} /> Shivamogga, Karnataka</p>
            <h1>Your Device Deserves the Best Care</h1>
            <p className="lead">
              SK Electronics brings expert mobile repair and electronics service to Shivamogga. Genuine parts, skilled
              hands, and honest pricing — every time.
            </p>
            <div className="btn-row">
              <CallButton />
              <DirectionsButton />
            </div>
          </div>
          <Photo name="shop" alt="SK Electronics shop in Shivamogga" className="hero-photo" label="Our Shivamogga workshop" />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead title="What We Fix" text="From cracked screens to software glitches, we handle it all with care and precision." />
          <div className="grid grid-2">
            {SERVICES.slice(0, 6).map((s) => <Card key={s.title} {...s} tag={null} />)}
          </div>
          <Link to="/services" className="text-link">View all services <ArrowRight size={16} /></Link>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHead title="Beyond Repairs" text="Learn a skill or get expert help with your project." />
          <div className="grid grid-3">
            {TRAINING.map((t) => <Card key={t.title} {...t} />)}
          </div>
          <Link to="/training" className="text-link">Training & projects <ArrowRight size={16} /></Link>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead title="Why Shivamogga Trusts SK Electronics" />
          <div className="grid grid-3">
            {WHY.map((w, i) => (
              <div key={w.title} className="why">
                <span className="why-num">{String(i + 1).padStart(2, "0")}</span>
                <h3>{w.title}</h3>
                <p>{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Bring Your Device In Today" text="Walk in or call ahead — we're ready to help. Located in the heart of Shivamogga." />
    </>
  );
}
