// ============================================================
//  EDIT THIS FILE to update the shop details on the website.
//  Leave a value as "" (empty) and that part of the site is hidden.
// ============================================================
window.SITE = {
  name: "SK Electronics",
  tagline: "Your neighbourhood electronics shop in Shivamogga",

  // Phone in international format, digits only after +, e.g. "+919876543210"
  phone: "",
  // WhatsApp number in the same format (can be the same as phone)
  whatsapp: "",
  email: "",

  // Full street address as it should appear on the site
  address: "Shivamogga, Karnataka, India",

  // Opening hours, one line per entry. Empty list = section hidden.
  hours: [
    // ["Mon – Sat", "9:30 AM – 8:30 PM"],
    // ["Sunday", "Closed"],
  ],

  // What the shop offers. Edit freely.
  services: [
    { icon: "📺", title: "TVs & Home Appliances", text: "Televisions, audio systems and everyday home electronics." },
    { icon: "🔧", title: "Repairs & Service", text: "Diagnosis and repair of electronic devices and appliances." },
    { icon: "🔌", title: "Parts & Accessories", text: "Cables, adapters, remotes, batteries and spare parts." },
    { icon: "💡", title: "Electricals", text: "Lighting, switches and electrical fittings for home and shop." },
  ],

  // Location (from the Google Maps listing)
  lat: 13.9339755,
  lng: 75.570506,
  mapsUrl: "https://www.google.com/maps/place/SK+ELECTRONICS/@13.9339755,75.570506,17z/data=!3m1!4b1!4m6!3m5!1s0x3bbba9d68afc4d15:0x4002dd493828a60f!8m2!3d13.9339755!4d75.570506!16s%2Fg%2F11vlgsg54t",
};
