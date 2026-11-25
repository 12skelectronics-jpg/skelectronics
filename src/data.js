// ============================================================
//  Shop details — edit here and the whole site updates.
// ============================================================
export const SHOP = {
  name: "SK Electronics",
  phone: "+919686450360",
  phoneDisplay: "96864 50360",
  // WhatsApp number used by the contact form (digits only, with country code)
  whatsapp: "919686450360",
  address: "LLR Rd, Durgigudi, Shivamogga, Karnataka 577201",
  // From the Google listing (update when it changes)
  rating: "4.8",
  reviewCount: 76,
  hours: "9:00 AM – 7:00 PM",
  lat: 13.9339755,
  lng: 75.570506,
  mapsUrl:
    "https://www.google.com/maps/place/SK+ELECTRONICS/@13.9339755,75.570506,17z/data=!3m1!4b1!4m6!3m5!1s0x3bbba9d68afc4d15:0x4002dd493828a60f!8m2!3d13.9339755!4d75.570506!16s%2Fg%2F11vlgsg54t",
  reviewsUrl:
    "https://www.google.com/maps/place/SK+ELECTRONICS/@13.9339755,75.570506,17z/data=!4m8!3m7!1s0x3bbba9d68afc4d15:0x4002dd493828a60f!8m2!3d13.9339755!4d75.570506!9m1!1b1!16s%2Fg%2F11vlgsg54t",
};

// Photos: put your files in the /public folder with these names.
// If a file is missing, a styled placeholder is shown instead.
export const PHOTOS = {
  logo: "logo.png",
  shop: "shop.jpg",
  workbench: "workbench.jpg",
  technician: "technician.jpg",
  training: "training.jpg",
  bench2: "gallery/workbench-2.jpg",
};

// Real photos of the shop (public/gallery)
export const GALLERY = [
  { src: "gallery/interior.jpg", alt: "Inside the SK Electronics workshop", wide: true },
  { src: "gallery/workbench-2.jpg", alt: "Repair bench with microscope and soldering station" },
  { src: "gallery/technician-1.jpg", alt: "Technician repairing a phone under the microscope" },
  { src: "gallery/technician-2.jpg", alt: "Chip-level repair at SK Electronics" },
  { src: "gallery/microscope.jpg", alt: "Microscope soldering setup" },
  { src: "gallery/bench.jpg", alt: "SK Electronics repair workstation" },
];

// Stock photos from Wikimedia Commons — the licence requires the credit shown on the site.
export const STOCK = [
  { src: "stock/cracked-screen.jpg", caption: "Screen & battery replacement", author: "Thilo Parg", source: "https://commons.wikimedia.org/wiki/File:IPhone_6s_display_repair_2.jpg" },
  { src: "stock/soldering.jpg", caption: "Board-level soldering", author: "Johnnybam", source: "https://commons.wikimedia.org/wiki/File:Skilled_Phone_Repairer_at_Work.jpg" },
  { src: "stock/battery.jpg", caption: "Careful disassembly", author: "Thilo Parg", source: "https://commons.wikimedia.org/wiki/File:IPhone_6s_display_repair_4.jpg" },
  { src: "stock/components.jpg", caption: "Every part, understood", author: "DYVER", source: "https://commons.wikimedia.org/wiki/File:Komponenten_des_iPhone_4.jpg" },
];
export const STOCK_LICENSE = { name: "CC BY-SA 4.0", url: "https://creativecommons.org/licenses/by-sa/4.0/" };

// Real reviews copied from the Google listing (shortened where Google truncates).
export const REVIEWS = [
  {
    name: "Chetankumar Patil",
    text: "I feel very happy to give a review about this service center. The owner is very experienced, and the employees also have good knowledge and are highly skilled. The owner responds very politely and respects the customers, providing excellent…",
  },
  {
    name: "Syed Dadapeer",
    text: "I had an excellent experience with the Mobile Training Center. The staff were friendly, patient, and extremely knowledgeable. The training materials were up-to-date, and the hands-on activities made learning easy and enjoyable…",
  },
];

export const SERVICES = [
  { icon: "Smartphone", title: "Screen Replacement", text: "Cracked, shattered, or unresponsive display? We replace screens for all major brands using genuine-quality parts. Your phone will look and feel brand new.", tag: "Samsung, Apple, Redmi, Realme, OnePlus, Vivo, Oppo" },
  { icon: "BatteryCharging", title: "Battery Replacement", text: "Battery draining too fast, not charging, or swelling? We fit high-quality replacement batteries that restore your device's full standby and backup time.", tag: "All major brands" },
  { icon: "Droplets", title: "Water Damage Repair", text: "Dropped your phone in water? Don't panic. Our technicians carefully disassemble, clean, and restore water-damaged devices with a thorough drying and inspection process.", tag: "All brands" },
  { icon: "Cpu", title: "Software & OS Issues", text: "Slow performance, boot loops, app crashes, or virus issues? We diagnose and fix software problems, restore factory settings, and update your OS safely.", tag: "Android & iOS" },
  { icon: "Zap", title: "Charging Port Repair", text: "Phone not charging or connecting to PC? We repair or replace faulty charging ports — USB-C, Micro-USB, and Lightning — so you stay powered up.", tag: "All brands" },
  { icon: "Camera", title: "Camera Repair", text: "Blurry photos, black camera screen, or broken lens? We repair front and rear cameras so you can capture every moment.", tag: "All brands" },
  { icon: "Volume2", title: "Speaker & Mic Repair", text: "No sound, distorted audio, or no mic working during calls? We diagnose and replace faulty speakers and microphones quickly.", tag: "All brands" },
  { icon: "CircuitBoard", title: "Motherboard & IC Repair", text: "Advanced chip-level repairs using microscope soldering equipment. We handle complex motherboard faults that other shops can't fix.", tag: "All brands" },
];

export const BRANDS = ["Samsung", "Apple iPhone", "Redmi / Xiaomi", "Realme", "OnePlus", "Vivo", "Oppo", "Motorola", "Nokia", "Poco"];

export const TRAINING = [
  { icon: "GraduationCap", title: "Mobile Repair Classes", text: "Hands-on mobile phone repair training at our workshop. Learn hardware and software repair — from basics to chip-level work — directly from experienced technicians. Call us for batch timings and details." },
  { icon: "Radio", title: "IoT Projects", text: "IoT project development and guidance for students and hobbyists — sensors, microcontrollers, and connected devices, built and explained step by step." },
  { icon: "Code2", title: "College Software Projects", text: "Software projects for college students, with guidance to help you understand, run, and confidently present your project." },
];

export const WHY = [
  { title: "Genuine Parts", text: "We use only quality-certified components so your repair lasts and your warranty stays intact." },
  { title: "Experienced Technicians", text: "Our team has years of hands-on experience with all major brands and models — no guesswork, just results." },
  { title: "Transparent Pricing", text: "You'll know the cost before we start. No hidden charges, no surprises — just honest, fair service." },
];

export const APART = [
  { icon: "ShieldCheck", title: "Genuine Parts", text: "We use only genuine or genuine-quality parts to ensure your device performs as it should after every repair." },
  { icon: "Wrench", title: "Skilled Technicians", text: "Our team is trained in advanced repair techniques including microscope-level motherboard work — skills that set us apart." },
  { icon: "BadgeIndianRupee", title: "Transparent Pricing", text: "No hidden charges. We give you a clear quote before we start any work, so you always know what you're paying for." },
  { icon: "Smartphone", title: "All Brands Welcome", text: "Samsung, Apple, Redmi, Realme, OnePlus, Vivo, Oppo and more — if it's a phone or tablet, we can fix it." },
];
