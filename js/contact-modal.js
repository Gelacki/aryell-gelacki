const modal = document.querySelector("#contact-modal");
const openModalLink = document.querySelector("[data-open-contact-modal]");
const closeModalLink = document.querySelector("[data-close-contact-modal]");
const contactForm = document.querySelector("#contact-form");
const submitContactLink = document.querySelector("[data-submit-contact-form]");
const whatsappInput = document.querySelector("#whatsapp");
const messageInput = document.querySelector("#message");

function openModal(event) {
  event.preventDefault();
  modal.hidden = false;
  whatsappInput.focus();
}

function closeModal(event) {
  event.preventDefault();
  modal.hidden = true;
  openModalLink.focus();
}

function buildMailtoLink() {
  const whatsapp = whatsappInput.value.trim();
  const message = messageInput.value.trim();
  const subject = "Contato pelo site - Aryell Gelacki";
  const body = [
    "Olá, Aryell.",
    "",
    "Recebi este contato pelo site.",
    "",
    `WhatsApp: ${whatsapp}`,
    "",
    "Mensagem:",
    message,
  ].join("\n");

  return `mailto:gelacki.chowa@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function submitContact(event) {
  event.preventDefault();

  if (!contactForm.reportValidity()) {
    return;
  }

  window.location.href = buildMailtoLink();
  modal.hidden = true;
}

openModalLink.addEventListener("click", openModal);
closeModalLink.addEventListener("click", closeModal);
submitContactLink.addEventListener("click", submitContact);

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.hidden = true;
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !modal.hidden) {
    modal.hidden = true;
    openModalLink.focus();
  }
});
