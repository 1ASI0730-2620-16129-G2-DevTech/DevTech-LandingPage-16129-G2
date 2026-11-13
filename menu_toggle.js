/*
 * WashTrack Landing Page - Navigation behavior
 * - Hamburger menu (mobile) with accessible state (aria-expanded, translated aria-label)
 * - Closes with Escape or after choosing a link
 * - Marks the section currently in view with aria-current (scrollspy)
 */
(function () {
  "use strict";

  const t = (key) => (window.WashTrackI18n ? window.WashTrackI18n.t(key) : key);

  const toggleButton = document.querySelector(".menu-toggle");
  const navCollapse = document.querySelector(".nav-collapse");

  if (toggleButton && navCollapse) {
    const icon = toggleButton.querySelector(".material-symbols-outlined");

    const setMenuState = (isOpen) => {
      navCollapse.classList.toggle("active", isOpen);
      toggleButton.setAttribute("aria-expanded", String(isOpen));
      toggleButton.setAttribute("aria-label", t(isOpen ? "nav.closeMenu" : "nav.openMenu"));
      if (icon) {
        icon.textContent = isOpen ? "close" : "menu";
      }
    };

    toggleButton.addEventListener("click", () => {
      setMenuState(!navCollapse.classList.contains("active"));
    });

    navCollapse.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => setMenuState(false));
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && navCollapse.classList.contains("active")) {
        setMenuState(false);
        toggleButton.focus();
      }
    });

    document.addEventListener("washtrack:languagechange", () => {
      setMenuState(navCollapse.classList.contains("active"));
    });

    setMenuState(false);
  }

  // ---------- Scrollspy: aria-current on the main navigation ----------
  const navLinks = Array.from(document.querySelectorAll('.Menu-Horizontal a[href^="#"]'));
  const sections = navLinks
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  if ("IntersectionObserver" in window && sections.length > 0) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }
          const activeHref = `#${entry.target.id}`;
          navLinks.forEach((link) => {
            if (link.getAttribute("href") === activeHref) {
              link.setAttribute("aria-current", "true");
            } else {
              link.removeAttribute("aria-current");
            }
          });
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
  }
})();
