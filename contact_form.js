/*
 * WashTrack Landing Page - Contact form
 * Accessible client-side validation (aria-invalid, aria-describedby, live region)
 * with messages in the active language.
 */
(function () {
  "use strict";

  const form = document.getElementById("contactForm");
  if (!form) {
    return;
  }

  const t = (key) => (window.WashTrackI18n ? window.WashTrackI18n.t(key) : key);
  const status = document.getElementById("form-status");
  const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  const rules = [
    { id: "nombre", errorKey: "contact.err.name", isValid: (value) => value.trim().length >= 3 },
    { id: "correo", errorKey: "contact.err.email", isValid: (value) => EMAIL_PATTERN.test(value.trim()) },
    { id: "tipo", errorKey: "contact.err.type", isValid: (value) => value !== "" },
    { id: "mensaje", errorKey: "contact.err.message", isValid: (value) => value.trim().length >= 10 },
  ];

  function showError(field, errorKey) {
    const errorElement = document.getElementById(`${field.id}-error`);
    field.setAttribute("aria-invalid", "true");
    if (errorElement) {
      errorElement.dataset.errorKey = errorKey;
      errorElement.textContent = t(errorKey);
      errorElement.hidden = false;
    }
  }

  function clearError(field) {
    const errorElement = document.getElementById(`${field.id}-error`);
    field.removeAttribute("aria-invalid");
    if (errorElement) {
      delete errorElement.dataset.errorKey;
      errorElement.textContent = "";
      errorElement.hidden = true;
    }
  }

  function validateRule(rule) {
    const field = document.getElementById(rule.id);
    if (!field) {
      return true;
    }
    const valid = rule.isValid(field.value);
    if (valid) {
      clearError(field);
    } else {
      showError(field, rule.errorKey);
    }
    return valid;
  }

  function setStatus(key, type) {
    status.dataset.statusKey = key;
    status.textContent = t(key);
    status.classList.toggle("is-error", type === "error");
    status.classList.toggle("is-success", type === "success");
  }

  function clearStatus() {
    delete status.dataset.statusKey;
    status.textContent = "";
    status.classList.remove("is-error", "is-success");
  }

  // Re-validate a field when the visitor leaves it, once it was marked invalid.
  rules.forEach((rule) => {
    const field = document.getElementById(rule.id);
    if (!field) {
      return;
    }
    field.addEventListener("blur", () => {
      if (field.getAttribute("aria-invalid") === "true") {
        validateRule(rule);
      }
    });
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const results = rules.map(validateRule);
    const firstInvalidIndex = results.indexOf(false);

    if (firstInvalidIndex !== -1) {
      setStatus("contact.err.summary", "error");
      document.getElementById(rules[firstInvalidIndex].id).focus();
      return;
    }

    form.reset();
    setStatus("contact.success", "success");
  });

  form.addEventListener("input", () => {
    if (status.classList.contains("is-success")) {
      clearStatus();
    }
  });

  // Translate visible messages when the language changes.
  document.addEventListener("washtrack:languagechange", () => {
    form.querySelectorAll(".campo-error[data-error-key]").forEach((errorElement) => {
      errorElement.textContent = t(errorElement.dataset.errorKey);
    });
    if (status.dataset.statusKey) {
      status.textContent = t(status.dataset.statusKey);
    }
  });
})();
