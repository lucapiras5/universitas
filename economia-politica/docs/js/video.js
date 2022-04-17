console.log("Fix video urls: loaded");
document.querySelectorAll("video").forEach(function (video) {
  console.log(video.dataset)
  video.src = `https://lp-me-lezioni.eu-central-1.linodeobjects.com/${video.dataset.prefix ? video.dataset.prefix : "economia-politica"}/${video.dataset.date}-economia-politica-${video.dataset.type}.webm`;
  video.controls = true;
})
document.querySelectorAll("div.registrazione").forEach(function (registrazione) {
  r = JSON.parse(registrazione.dataset.data);
  r.domain = r.domain || "https://lp-me-lezioni.eu-central-1.linodeobjects.com";
  r.prefix = r.prefix || r.subject;
  r.type = r.type || "lezione";
  r.ext = r.ext || "webm";
  html = `<video src="$'{r.domain}/${r.prefix}/${r.date}-${r.subject}-${r.type}.${r.ext}"></video>`;
  console.log(html);
  registrazione.innerHTML = html;
  video.controls = true;
})
document.querySelectorAll("a.esercitazione").forEach(function (link) {
  link.href = `https://lp-me-lezioni.eu-central-1.linodeobjects.com/economia-politica/esercitazioni/${link.dataset.date}-esercitazione.pdf`;
  link.target = "_blank";
})
