import { Link } from "react-router-dom";
import { TRAINING } from "../data.js";
import { CallButton, SectionHead, Icon, CtaBand } from "../components.jsx";

export default function Training() {
  return (
    <>
      <section className="hero hero-simple">
        <div className="container">
          <p className="eyebrow">Training & Projects</p>
          <h1>Learn, Build, and Grow with SK Electronics</h1>
          <p className="lead">
            Beyond repairs, we share our skills. Join our mobile repair classes, or get expert help building IoT and
            college software projects.
          </p>
          <div className="btn-row">
            <CallButton>Call to Enquire</CallButton>
            <Link className="btn btn-outline" to="/contact">Send a Message</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead title="What We Offer" />
          <div className="feature-list">
            {TRAINING.map((t) => (
              <article key={t.title} className="feature">
                <div className="feature-icon"><Icon name={t.icon} size={28} /></div>
                <div>
                  <h3>{t.title}</h3>
                  <p>{t.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand center title="Interested? Talk to Us." text="Call or visit our Shivamogga shop for batch timings, project topics and details." />
    </>
  );
}
