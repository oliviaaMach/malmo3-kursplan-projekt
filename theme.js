(function () {
  const KEY = "theme";
  const root = document.documentElement;
  const btn  = document.getElementById("themeToggle");

  // 1) initial preference: localStorage > system > default dark
  const systemPrefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
  const saved = localStorage.getItem(KEY);
  const initial = saved || (systemPrefersLight ? "light" : "dark");
  apply(initial);

  // 2) toggle on click
  btn?.addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
    apply(next);
    localStorage.setItem(KEY, next);
  });

  function apply(mode) {
    root.setAttribute("data-theme", mode);
    if (btn) {
      btn.setAttribute("aria-pressed", String(mode === "light"));
      btn.textContent = mode === "light" ? "☀️" : "🌙";
    }
  }
})();
