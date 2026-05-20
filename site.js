const modalTriggers = document.querySelectorAll("[data-modal-target]");

function openModal(id) {
  const dialog = document.getElementById(id);
  if (!dialog || typeof dialog.showModal !== "function") {
    return;
  }

  dialog.showModal();
}

function closeModal(dialog) {
  if (dialog?.open) {
    dialog.close();
  }
}

modalTriggers.forEach((trigger) => {
  trigger.addEventListener("click", () => openModal(trigger.dataset.modalTarget));
});

document.querySelectorAll(".modal-close").forEach((button) => {
  button.addEventListener("click", () => closeModal(button.closest("dialog")));
});

document.querySelectorAll(".detail-modal").forEach((dialog) => {
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) {
      closeModal(dialog);
    }
  });
});
