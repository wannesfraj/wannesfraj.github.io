(() => {
  const root = document.documentElement;
  const loader = document.querySelector(".home-entry-loader");
  const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");

  if (!loader || !root.classList.contains("home-entry-pending") || motionPreference.matches) {
    root.classList.remove("home-entry-pending");
    loader?.remove();
    return;
  }

  const image = loader.querySelector("img");
  const progress = loader.querySelector("[data-entry-progress]");
  const fill = loader.querySelector("[data-entry-progress-fill]");
  const percentLabel = loader.querySelector("[data-entry-percent]");
  const status = loader.querySelector("[data-entry-status]");
  const skipButton = loader.querySelector("[data-entry-skip]");
  const blockedElements = [
    document.querySelector(".skip-link"),
    document.querySelector(".site-header"),
    document.querySelector("#main"),
    document.querySelector(".footer"),
  ].filter(Boolean);

  let complete = false;
  let started = false;
  let startedAt = 0;
  let duration = 1400;
  let frame = 0;
  let fallbackTimer = 0;
  let lastValue = -1;

  blockedElements.forEach((element) => {
    element.inert = true;
    if (element.id === "main") element.setAttribute("aria-busy", "true");
  });

  function setProgress(value) {
    const rounded = Math.max(0, Math.min(100, Math.floor(value)));
    if (rounded === lastValue) return;
    lastValue = rounded;
    progress?.setAttribute("aria-valuenow", String(rounded));
    progress?.setAttribute("aria-valuetext", `${rounded} percent`);
    if (percentLabel) percentLabel.textContent = `${rounded}%`;
    if (fill) fill.style.transform = `scaleX(${rounded / 100})`;
  }

  function reveal(immediate = false) {
    if (complete) return;
    complete = true;
    cancelAnimationFrame(frame);
    clearTimeout(fallbackTimer);
    removeListeners();
    setProgress(100);
    if (status) status.textContent = "Portfolio ready.";
    if (immediate) loader.dataset.entryMotionCancelled = "true";
    loader.classList.add("is-leaving");

    window.setTimeout(() => {
      root.classList.remove("home-entry-pending");
      blockedElements.forEach((element) => {
        element.inert = false;
        element.removeAttribute("aria-busy");
      });
      loader.remove();
    }, immediate ? 0 : 400);
  }

  function tick(now) {
    if (complete) return;
    const value = Math.min(100, ((now - startedAt) / duration) * 100);
    setProgress(value);
    if (value >= 100) {
      reveal();
      return;
    }
    frame = requestAnimationFrame(tick);
  }

  function start(event) {
    if (started || complete) return;
    started = true;
    duration = Math.max(500, Number(event?.detail?.duration) || 1400);
    startedAt = performance.now();
    frame = requestAnimationFrame(tick);
  }

  function onMotionEnd(event) {
    reveal(Boolean(event.detail?.interrupted || motionPreference.matches));
  }

  function onKeyDown(event) {
    if (event.key === "Escape") skip();
  }

  function skip() {
    if (complete) return;
    loader.dataset.entryMotionCancelled = "true";
    window.dispatchEvent(new CustomEvent("portfolio:entry-motion-skip"));
    reveal(true);
  }

  function removeListeners() {
    window.removeEventListener("portfolio:entry-motion-start", start);
    window.removeEventListener("portfolio:entry-motion-end", onMotionEnd);
    skipButton?.removeEventListener("click", skip);
    document.removeEventListener("keydown", onKeyDown);
    motionPreference.removeEventListener("change", finishForPreference);
  }

  function finishForPreference() {
    if (motionPreference.matches) skip();
  }

  window.addEventListener("portfolio:entry-motion-start", start);
  window.addEventListener("portfolio:entry-motion-end", onMotionEnd);
  skipButton?.addEventListener("click", skip);
  document.addEventListener("keydown", onKeyDown);
  motionPreference.addEventListener("change", finishForPreference);

  const imageReady = image && typeof image.decode === "function"
    ? image.decode()
    : Promise.resolve();
  imageReady.then(() => {
    window.setTimeout(() => {
      if (!started && !complete) start();
    }, 180);
  }).catch(() => reveal(true));

  fallbackTimer = window.setTimeout(() => reveal(true), 5500);
})();
