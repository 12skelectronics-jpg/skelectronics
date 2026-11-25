import { useState } from "react";
import { Phone, MapPin, Clock, Send, ExternalLink } from "lucide-react";
import { SHOP } from "../data.js";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", device: "", issue: "" });
  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const text =
      `Hello SK Electronics,\n\nName: ${form.name}` +
      (form.phone ? `\nPhone: ${form.phone}` : "") +
      (form.device ? `\nDevice: ${form.device}` : "") +
      `\n\n${form.issue}`;
    window.open(`https://wa.me/${SHOP.whatsapp}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
  };

  return (
    <>
      <section className="hero hero-simple">
        <div className="container">
          <p className="eyebrow">Contact Us</p>
          <h1>Get in Touch with SK Electronics</h1>
          <p className="lead">
            Have a question about your device? Want to check repair availability or join our classes? Reach out — we're
            happy to help.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <div className="panel">
            <h3>Visit Us</h3>
            <div className="info-row">
              <span className="info-icon"><Phone size={18} /></span>
              <div>
                <p className="info-label">Phone</p>
                <a className="info-phone" href={`tel:${SHOP.phone}`}>{SHOP.phoneDisplay}</a>
              </div>
            </div>
            <div className="info-row">
              <span className="info-icon"><MapPin size={18} /></span>
              <div>
                <p className="info-label">Address</p>
                <p className="muted">{SHOP.address}</p>
                <a className="small-link" href={SHOP.mapsUrl} target="_blank" rel="noopener noreferrer">Get Directions →</a>
              </div>
            </div>
            <div className="info-row">
              <span className="info-icon"><Clock size={18} /></span>
              <div>
                <p className="info-label">Working Hours</p>
                <p className="muted">{SHOP.hours}</p>
              </div>
            </div>
            <div className="map">
              <iframe
                title="SK Electronics on Google Maps"
                src={`https://maps.google.com/maps?q=${SHOP.lat},${SHOP.lng}&z=16&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a className="map-open" href={SHOP.mapsUrl} target="_blank" rel="noopener noreferrer">
                Open in Maps <ExternalLink size={12} />
              </a>
            </div>
          </div>

          <form className="panel" onSubmit={submit}>
            <h3>Send Us a Message</h3>
            <p className="muted small">Describe your device issue or enquiry — it opens WhatsApp with your message ready to send.</p>
            <div className="form-grid">
              <label>Your Name *<input required value={form.name} onChange={update("name")} placeholder="e.g. Rahul Kumar" /></label>
              <label>Phone Number<input type="tel" value={form.phone} onChange={update("phone")} placeholder="Your mobile number" /></label>
              <label className="full">Device / Brand or Course<input value={form.device} onChange={update("device")} placeholder="e.g. Samsung Galaxy S21, Repair class, IoT project" /></label>
              <label className="full">Describe the Issue *<textarea required rows={5} value={form.issue} onChange={update("issue")} placeholder="Tell us what's wrong with your device or what you need..." /></label>
            </div>
            <button className="btn btn-primary btn-block" type="submit"><Send size={16} /> Send Message</button>
          </form>
        </div>
      </section>
    </>
  );
}
