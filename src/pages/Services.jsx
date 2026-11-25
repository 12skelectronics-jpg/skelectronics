import { Link } from "react-router-dom";
import { SERVICES, BRANDS, STOCK, STOCK_LICENSE } from "../data.js";
import { Photo, CallButton, SectionHead, Card, CtaBand } from "../components.jsx";

export default function Services() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">Our Services</p>
            <h1>Expert Mobile Repair for Every Problem</h1>
            <p className="lead">
              Whether it's a cracked screen or a dead motherboard, SK Electronics has the skills, tools, and genuine parts
              to get your device working like new.
            </p>
            <div className="btn-row">
              <CallButton />
              <Link className="btn btn-outline" to="/contact">Get in Touch</Link>
            </div>
          </div>
          <Photo name="bench2" alt="SK Electronics repair bench with microscope" className="hero-photo" label="Chip-level repairs" />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead title="What We Repair" text="Professional repair services for all major smartphone and tablet brands." />
          <div className="grid grid-3">
            {SERVICES.map((s) => <Card key={s.title} {...s} />)}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHead title="Repairs in Action" text="Precision work on every device — from screens and batteries to the motherboard." />
          <div className="stock-grid">
            {STOCK.map((s) => (
              <figure key={s.src} className="stock">
                <img src={import.meta.env.BASE_URL + s.src} alt={s.caption} loading="lazy" />
                <figcaption>
                  <b>{s.caption}</b>
                  <small>
                    Photo: <a href={s.source} target="_blank" rel="noopener noreferrer">{s.author}</a>,{" "}
                    <a href={STOCK_LICENSE.url} target="_blank" rel="noopener noreferrer">{STOCK_LICENSE.name}</a>
                  </small>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead center title="All Brands Serviced" text="We repair all major smartphone and tablet brands" />
          <div className="chips">
            {BRANDS.map((b) => <span key={b} className="chip">{b}</span>)}
          </div>
        </div>
      </section>

      <CtaBand center title="Need a Repair? We're Ready." text="Walk in to our Shivamogga shop or call us to check availability." />
    </>
  );
}
