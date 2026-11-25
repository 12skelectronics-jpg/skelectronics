import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import {
  Phone, MapPin, Clock, Menu, X, Navigation, Circle, Smartphone, BatteryCharging, Droplets, Cpu, Zap, Camera,
  Volume2, CircuitBoard, GraduationCap, Radio, Code2, ShieldCheck, Wrench, BadgeIndianRupee,
} from "lucide-react";
import { SHOP, PHOTOS } from "./data.js";

const asset = (file) => import.meta.env.BASE_URL + file;

const ICONS = {
  Smartphone, BatteryCharging, Droplets, Cpu, Zap, Camera, Volume2, CircuitBoard,
  GraduationCap, Radio, Code2, ShieldCheck, Wrench, BadgeIndianRupee,
};

export function Icon({ name, size = 20 }) {
  const C = ICONS[name] || Circle;
  return <C size={size} strokeWidth={1.8} />;
}

/** Image from /public, falls back to a styled placeholder if the file is missing. */
export function Photo({ name, alt, className = "", label }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div className={`photo placeholder ${className}`} role="img" aria-label={alt}>
        <Smartphone size={48} strokeWidth={1.4} />
        <span>{label || "SK Electronics"}</span>
      </div>
    );
  }
  return <img className={`photo ${className}`} src={asset(PHOTOS[name])} alt={alt} onError={() => setFailed(true)} />;
}

export function Logo({ small }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <span className={`logo-fallback ${small ? "sm" : ""}`}>
        <b>SK</b>
      </span>
    );
  }
  return <img className={`logo ${small ? "sm" : ""}`} src={asset(PHOTOS.logo)} alt="SK Electronics logo" onError={() => setFailed(true)} />;
}

const NAV = [
  ["/", "Home"],
  ["/services", "Services"],
  ["/training", "Training"],
  ["/about", "About"],
  ["/reviews", "Reviews"],
  ["/contact", "Contact"],
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <div className="container header-inner">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <Logo small />
        </Link>
        <nav className={`nav ${open ? "open" : ""}`}>
          {NAV.map(([to, label]) => (
            <NavLink key={to} to={to} end={to === "/"} onClick={() => setOpen(false)}>
              {label}
            </NavLink>
          ))}
        </nav>
        <div className="header-actions">
          <a className="btn btn-primary btn-sm" href={`tel:${SHOP.phone}`}>Call Us</a>
          <button className="menu-btn" aria-label="Menu" onClick={() => setOpen(!open)}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
    </header>
  );
}

export function CallButton({ children = "Call Us Now", variant = "btn-primary" }) {
  return (
    <a className={`btn ${variant}`} href={`tel:${SHOP.phone}`}>
      <Phone size={16} /> {children}
    </a>
  );
}

export function DirectionsButton({ variant = "btn-outline", children = "Get Directions" }) {
  return (
    <a className={`btn ${variant}`} href={SHOP.mapsUrl} target="_blank" rel="noopener noreferrer">
      <Navigation size={16} /> {children}
    </a>
  );
}

export function SectionHead({ eyebrow, title, text, center }) {
  return (
    <div className={`section-head ${center ? "center" : ""}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {text && <p className="muted">{text}</p>}
    </div>
  );
}

export function Card({ icon, title, text, tag }) {
  return (
    <article className="card">
      <div className="card-icon"><Icon name={icon} /></div>
      <h3>{title}</h3>
      <p>{text}</p>
      {tag && <span className="card-tag">{tag}</span>}
    </article>
  );
}

export function ContactList({ light }) {
  return (
    <ul className={`contact-list ${light ? "light" : ""}`}>
      <li><Phone size={16} /> <a href={`tel:${SHOP.phone}`}>{SHOP.phoneDisplay}</a></li>
      <li><MapPin size={16} /> {SHOP.address}</li>
      <li><Clock size={16} /> {SHOP.hours}</li>
    </ul>
  );
}

/** Blue call-to-action band used at the bottom of pages. */
export function CtaBand({ title, text, center }) {
  return (
    <section className="cta-band">
      <div className={`container cta-inner ${center ? "center" : ""}`}>
        <div>
          <h2>{title}</h2>
          <p>{text}</p>
          {center && (
            <div className="btn-row center">
              <CallButton variant="btn-white">{SHOP.phoneDisplay}</CallButton>
              <DirectionsButton variant="btn-ghost">Find Us</DirectionsButton>
            </div>
          )}
        </div>
        {!center && (
          <div>
            <ContactList light />
            <div className="btn-row">
              <CallButton variant="btn-white">Call Now</CallButton>
              <DirectionsButton variant="btn-ghost" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <p className="footer-brand"><span>SK</span> Electronics</p>
          <p className="footer-text">
            Shivamogga's trusted mobile repair and electronics service shop. Genuine parts, experienced technicians,
            transparent pricing. Also offering mobile repair classes, IoT projects and college software projects.
          </p>
        </div>
        <div>
          <p className="footer-title">Contact</p>
          <ContactList light />
        </div>
        <div>
          <p className="footer-title">Quick Links</p>
          <ul className="footer-links">
            {NAV.map(([to, label]) => (
              <li key={to}><Link to={to}>{label}</Link></li>
            ))}
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">© {new Date().getFullYear()} SK Electronics, Shivamogga. All rights reserved.</div>
    </footer>
  );
}
