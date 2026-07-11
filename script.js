document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.getElementById("nav-toggle");
  var nav = document.getElementById("site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  }

  var aktuelles = document.getElementById("aktuelles-content");
  if (aktuelles) {
    var isEnglish = document.documentElement.lang === "en";
    loadLatest(aktuelles, {
      pages: isEnglish ? ["./appearances/", "./blog/"] : ["./auftritte/", "./blog/"]
    });
  }
});

// Pulls the newest entry from the archive pages (Auftritte/Blog) so the
// homepage strip never needs manual updates when a new entry is added.
function loadLatest(el, cfg) {
  Promise.all(cfg.pages.map(fetchFirstEntry))
    .then(function (results) {
      var entries = results.filter(Boolean);
      if (!entries.length) return;
      entries.sort(function (a, b) { return b.date.localeCompare(a.date); });
      var latest = entries[0];
      el.innerHTML = '<a href="' + latest.href + '">' + latest.title + '</a>';
    })
    .catch(function () {
      // e.g. opened via file:// without a server — leave the strip empty
    });
}

function fetchFirstEntry(pageUrl) {
  return fetch(pageUrl)
    .then(function (res) { return res.text(); })
    .then(function (html) {
      var doc = new DOMParser().parseFromString(html, "text/html");
      var entry = doc.querySelector("[data-date]");
      var heading = entry && entry.querySelector("h3");
      if (!entry || !heading) return null;
      return {
        date: entry.getAttribute("data-date"),
        title: heading.textContent.trim(),
        href: pageUrl
      };
    })
    .catch(function () { return null; });
}
