(function () {
  var S = window.SITE || {};
  var hours = S.hours || [];

  // Hide anything whose data is missing
  var present = {
    phone: !!S.phone,
    whatsapp: !!S.whatsapp,
    email: !!S.email,
    hours: hours.length > 0,
  };
  document.querySelectorAll("[data-show]").forEach(function (el) {
    if (!present[el.dataset.show]) el.remove();
  });

  // Text fields
  document.querySelectorAll("[data-field]").forEach(function (el) {
    var v = S[el.dataset.field];
    if (v) el.textContent = v;
  });
  if (S.name) document.title = S.name + " – Shivamogga";

  // Links
  var links = {
    tel: "tel:" + (S.phone || ""),
    wa: "https://wa.me/" + String(S.whatsapp || "").replace(/\D/g, ""),
    mail: "mailto:" + (S.email || ""),
    maps: S.mapsUrl || ("https://www.google.com/maps?q=" + S.lat + "," + S.lng),
  };
  document.querySelectorAll("[data-href]").forEach(function (el) {
    el.href = links[el.dataset.href];
  });

  // Services
  var grid = document.getElementById("services-grid");
  (S.services || []).forEach(function (s) {
    var card = document.createElement("article");
    card.className = "card";
    card.innerHTML = '<div class="icon"></div><h3></h3><p></p>';
    card.querySelector(".icon").textContent = s.icon || "";
    card.querySelector("h3").textContent = s.title || "";
    card.querySelector("p").textContent = s.text || "";
    grid.appendChild(card);
  });

  // Hours
  var table = document.getElementById("hours");
  if (table) {
    hours.forEach(function (row) {
      var tr = document.createElement("tr");
      tr.innerHTML = "<th></th><td></td>";
      tr.children[0].textContent = row[0];
      tr.children[1].textContent = row[1];
      table.appendChild(tr);
    });
  }

  // Map (no API key needed)
  document.getElementById("map").src =
    "https://maps.google.com/maps?q=" + S.lat + "," + S.lng + "&z=17&output=embed";

  document.getElementById("year").textContent = new Date().getFullYear();
})();
