(() => {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("#site-nav");

  if (!toggle || !nav) return;

  const closeMenu = () => {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open navigation");
  };

  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    nav.classList.toggle("is-open", !isOpen);
    toggle.setAttribute("aria-expanded", String(!isOpen));
    toggle.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });

  window.addEventListener("resize", () => {
    if (window.matchMedia("(min-width: 761px)").matches) closeMenu();
  });
})();