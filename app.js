const store = {
  get(key, fallback) {
    try { const v = localStorage.getItem(key); return v === null ? fallback : JSON.parse(v); } catch (e) { return fallback; }
  },
  set(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) {}
  }
};

const main = document.getElementById("main");
const nav = document.getElementById("nav");
const side = document.getElementById("side");
const scrim = document.getElementById("scrim");
const LETTERS = ["A", "B", "C", "D"];

// Şıkları her soru için sabit ama karışık sırada göstermek (doğru cevap hep aynı harfte olmasın).
function seededOrder(n, seed) {
  const idx = [...Array(n).keys()];
  let s = seed;
  for (let i = n - 1; i > 0; i--) {
    s = (s * 9301 + 49297) % 233280;
    const j = Math.floor((s / 233280) * (i + 1));
    [idx[i], idx[j]] = [idx[j], idx[i]];
  }
  return idx;
}

function route() {
  const h = location.hash.replace("#", "") || "home";
  closeMenu();
  if (h.startsWith("hafta-")) renderWeek(Number(h.split("-")[1]));
  else if (h.startsWith("deneme-")) renderTest(Number(h.split("-")[1]));
  else if (h === "denemeler") renderTestList();
  else renderHome();
  renderNav(h);
  window.scrollTo(0, 0);
}

function renderNav(current) {
  const done = store.get("vm-done", []);
  const best = store.get("vm-best", {});
  let html = `<button data-go="home" class="${current === "home" ? "active" : ""}"><span class="num">⌂</span>Ana sayfa</button>`;
  html += `<div class="nav-group">Haftalar</div>`;
  for (const w of WEEKS) {
    const id = "hafta-" + w.id;
    html += `<button data-go="${id}" class="${current === id ? "active" : ""}"><span class="num">${w.id}</span><span>${w.title}</span>${done.includes(w.id) ? '<span class="done-dot">✓</span>' : ""}</button>`;
  }
  html += `<div class="nav-group">Vize denemeleri</div>`;
  html += `<button data-go="denemeler" class="${current === "denemeler" ? "active" : ""}"><span class="num">≡</span>Tüm denemeler</button>`;
  TESTS.forEach((t, i) => {
    const id = "deneme-" + (i + 1);
    const b = best[i + 1];
    html += `<button data-go="${id}" class="${current === id ? "active" : ""}"><span class="num">D${i + 1}</span><span>${t.title}</span>${b !== undefined ? `<span class="done-dot">${b}/20</span>` : ""}</button>`;
  });
  nav.innerHTML = html;
}

function renderHome() {
  const done = store.get("vm-done", []);
  main.innerHTML = `
    <div class="eyebrow">BSM 429 · Sakarya Üniversitesi</div>
    <h1>Veri Madenciliği vize rehberi</h1>
    <p class="lead">1–6. haftaların özetleri, formülleri, elle çözülmüş örnekleri ve sonunda 5 vize denemesi. Her haftayı bitirince "Bu haftayı tamamladım" de; ilerlemen bu tarayıcıda saklanır.</p>
    <div class="card"><b>İlerleme:</b> ${done.length} / ${WEEKS.length} hafta tamamlandı</div>
    <h2>Haftalar</h2>
    <div class="week-grid">
      ${WEEKS.map(w => `
        <button class="week-card" data-go="hafta-${w.id}">
          <div class="wk">HAFTA ${w.id} ${done.includes(w.id) ? "· ✓" : ""}</div>
          <div class="tt">${w.title}</div>
          <div class="ds">${w.short}</div>
        </button>`).join("")}
    </div>
    <h2>Önerilen çalışma planı</h2>
    <ol>
      <li>Her haftanın özetini oku; "Elle örnek" kutularını kâğıt kalemle kendin çöz.</li>
      <li>Formül kutularını bir sayfaya yaz (destek/güven/lift, Gini/entropi, normalizasyonlar, 1,5·ÇAA).</li>
      <li>Deneme 1–3 kavramları, Deneme 4 hesapları, Deneme 5 vaka ve tuzakları ölçer.</li>
      <li>Yanlış yaptığın sorunun haftasına dönüp o bölümü tekrar oku.</li>
    </ol>
    <div class="box tip"><span class="label">Sınavda en çok karıştırılanlar</span>
      Destekte payda tüm sepetler, güvende öncülün sepetleri · Aralık ↔ oran (sıfır gerçek yokluk mu?) · Slice tek boyut, dice iki+ boyut · SCD Tip 1 düzeltme, Tip 2 gerçek değişiklik · MCAR / MAR / MNAR · Jaccard "ikisi de 0"ı saymaz, SMC sayar · Kazanç oranı Gün tuzağını azaltır ama yok etmez.
    </div>
    <p><button class="btn primary" data-go="hafta-1">1. haftadan başla →</button> <button class="btn" data-go="denemeler">Denemelere git</button></p>
  `;
}

function renderWeek(id) {
  const w = WEEKS.find(x => x.id === id);
  if (!w) return renderHome();
  const done = store.get("vm-done", []);
  const isDone = done.includes(id);
  const prev = WEEKS.find(x => x.id === id - 1);
  const next = WEEKS.find(x => x.id === id + 1);
  main.innerHTML = `
    <div class="eyebrow">Hafta ${w.id}</div>
    <h1>${w.title}</h1>
    <div class="box key"><span class="label">🧩 Haftanın ilkesi</span>${w.principle}</div>
    ${w.body}
    <button class="btn ${isDone ? "" : "primary"} mark-done" id="markDone">${isDone ? "✓ Tamamlandı (geri al)" : "Bu haftayı tamamladım"}</button>
    <div class="pager">
      ${prev ? `<button class="btn" data-go="hafta-${prev.id}">← Hafta ${prev.id}</button>` : "<span></span>"}
      ${next ? `<button class="btn primary" data-go="hafta-${next.id}">Hafta ${next.id} →</button>` : `<button class="btn primary" data-go="denemeler">Vize denemelerine geç →</button>`}
    </div>
  `;
  document.getElementById("markDone").onclick = () => {
    const d = store.get("vm-done", []);
    store.set("vm-done", d.includes(id) ? d.filter(x => x !== id) : [...d, id]);
    renderWeek(id);
    renderNav("hafta-" + id);
  };
}

function renderTestList() {
  const best = store.get("vm-best", {});
  main.innerHTML = `
    <div class="eyebrow">Vize denemeleri</div>
    <h1>5 deneme, 100 soru</h1>
    <p class="lead">Her deneme 20 sorudan oluşur ve 1–6. haftaları karışık sorar. Şıkka tıkladığın anda doğru cevap ve açıklaması görünür.</p>
    <div class="test-list">
      ${TESTS.map((t, i) => `
        <div class="test-row">
          <button class="btn" data-go="deneme-${i + 1}"><b>${t.title}</b> — <span class="quiz-meta">${t.desc}</span></button>
          <span class="best">${best[i + 1] !== undefined ? "En iyi: " + best[i + 1] + "/20" : "—"}</span>
        </div>`).join("")}
    </div>
  `;
}

function renderTest(n) {
  const t = TESTS[n - 1];
  if (!t) return renderTestList();
  const answers = {};
  const total = t.questions.length;

  main.innerHTML = `
    <div class="eyebrow">Vize denemesi ${n}</div>
    <h1>${t.title}</h1>
    <p class="quiz-meta">${t.desc} · ${total} soru · Her soruda tek doğru cevap var.</p>
    <div class="score-bar">
      <span class="pill" id="progress">0 / ${total} cevaplandı</span>
      <span class="pill" id="score">Doğru: 0</span>
      <button class="btn" id="resetBtn">Baştan başla</button>
    </div>
    <div id="qs"></div>
    <div id="result"></div>
    <div class="pager">
      ${n > 1 ? `<button class="btn" data-go="deneme-${n - 1}">← Deneme ${n - 1}</button>` : `<button class="btn" data-go="denemeler">← Tüm denemeler</button>`}
      ${n < TESTS.length ? `<button class="btn primary" data-go="deneme-${n + 1}">Deneme ${n + 1} →</button>` : `<button class="btn" data-go="denemeler">Tüm denemeler</button>`}
    </div>
  `;

  const qs = document.getElementById("qs");
  t.questions.forEach((q, qi) => {
    const order = seededOrder(q.o.length, n * 100 + qi + 7);
    const el = document.createElement("div");
    el.className = "q";
    el.innerHTML = `
      <div class="q-head"><span class="q-num">${qi + 1}.</span><span class="q-text">${q.q}</span><span class="q-week">Hafta ${q.w}</span></div>
      <div class="opts">${order.map((oi, pos) => `<button class="opt" data-oi="${oi}"><span class="letter">${LETTERS[pos]})</span><span>${q.o[oi]}</span></button>`).join("")}</div>
      <div class="explain" hidden></div>
    `;
    el.querySelectorAll(".opt").forEach(btn => {
      btn.onclick = () => {
        if (answers[qi] !== undefined) return;
        const chosen = Number(btn.dataset.oi);
        answers[qi] = chosen;
        el.querySelectorAll(".opt").forEach(b => {
          b.disabled = true;
          const oi = Number(b.dataset.oi);
          if (oi === q.a) b.classList.add("correct");
          else if (oi === chosen) b.classList.add("wrong");
        });
        const ex = el.querySelector(".explain");
        ex.hidden = false;
        ex.innerHTML = `<b>${chosen === q.a ? "✓ Doğru." : "✗ Yanlış."}</b> ${q.e}`;
        update();
      };
    });
    qs.appendChild(el);
  });

  function update() {
    const answered = Object.keys(answers).length;
    const correct = Object.entries(answers).filter(([qi, a]) => t.questions[qi].a === a).length;
    document.getElementById("progress").textContent = `${answered} / ${total} cevaplandı`;
    document.getElementById("score").textContent = `Doğru: ${correct}`;
    if (answered === total) {
      const best = store.get("vm-best", {});
      if (best[n] === undefined || correct > best[n]) { best[n] = correct; store.set("vm-best", best); }
      const wrongWeeks = [...new Set(t.questions.filter((q, i) => answers[i] !== q.a).map(q => q.w))].sort();
      document.getElementById("result").innerHTML = `
        <div class="card result">
          <div class="big">${correct} / ${total}</div>
          <div>Puan: ${Math.round((correct / total) * 100)}</div>
          ${wrongWeeks.length ? `<p>Tekrar etmen önerilen haftalar: ${wrongWeeks.map(w => `<a href="#hafta-${w}">Hafta ${w}</a>`).join(" · ")}</p>` : "<p>Hepsi doğru, tebrikler! 🎉</p>"}
        </div>`;
      renderNav("deneme-" + n);
    }
  }

  document.getElementById("resetBtn").onclick = () => renderTest(n);
}

document.addEventListener("click", e => {
  const go = e.target.closest("[data-go]");
  if (go) { e.preventDefault(); location.hash = go.dataset.go; }
});

function closeMenu() { side.classList.remove("open"); scrim.classList.remove("show"); }
document.getElementById("menuBtn").onclick = () => { side.classList.add("open"); scrim.classList.add("show"); };
scrim.onclick = closeMenu;

document.getElementById("themeBtn").onclick = () => {
  const root = document.documentElement;
  const isDark = root.dataset.theme ? root.dataset.theme === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
  root.dataset.theme = isDark ? "light" : "dark";
  store.set("vm-theme", root.dataset.theme);
};

window.addEventListener("hashchange", route);
route();
