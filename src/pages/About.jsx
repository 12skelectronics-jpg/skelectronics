import { APART } from "../data.js";
import { Photo, SectionHead, Card, CtaBand } from "../components.jsx";

const STATS = [
  ["All Brands", "Smartphones & Tablets"],
  ["Chip-Level", "Motherboard Repairs"],
  ["Genuine", "Quality Parts Used"],
  ["Training", "Repair Classes & Projects"],
];

export default function About() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">About Us</p>
            <h1>Shivamogga's Trusted Mobile Repair Experts</h1>
            <p className="lead">
              SK Electronics has been serving the people of Shivamogga with honest, skilled, and reliable mobile repair
              services. We treat every device like it's our own.
            </p>
          </div>
          <Photo name="technician" alt="Technician repairing a phone" className="hero-photo" label="Skilled technicians" />
        </div>
      </section>

      <section className="stats">
        <div className="container stats-grid">
          {STATS.map(([big, small]) => (
            <div key={big}>
              <strong>{big}</strong>
              <span>{small}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container story">
          <div>
            <h2>Our Story</h2>
            <p>
              SK Electronics was founded with one simple goal — to give the people of Shivamogga access to professional,
              trustworthy mobile repair without the hassle.
            </p>
            <p>
              Our workshop is equipped with professional-grade tools including microscope soldering stations for
              chip-level repairs — the kind of advanced equipment you'd expect from a big-city service centre, right here
              in Shivamogga.
            </p>
            <p>
              We believe in transparent pricing, genuine parts, and honest advice. If your device can't be repaired,
              we'll tell you upfront — no hidden charges, no surprises. We also train the next generation through our
              mobile repair classes and help students with IoT and software projects.
            </p>
          </div>
          <Photo name="workbench" alt="SK Electronics workbench" className="story-photo" label="Our workbench" />
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHead title="What Sets Us Apart" />
          <div className="grid grid-2">
            {APART.map((a) => <Card key={a.title} {...a} />)}
          </div>
        </div>
      </section>

      <CtaBand title="Come Visit Us in Shivamogga" text="Walk in anytime during working hours — no appointment needed." />
    </>
  );
}
