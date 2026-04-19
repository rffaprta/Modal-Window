// element
const button = document.querySelectorAll(".btn-buka");
const modalBox = document.querySelector(".modal-box");
const overlay = document.querySelector(".overlay");
const message = document.querySelector(".modal-box p");
const closeBtn = document.querySelector(".close-btn");

// click event
button.forEach((btn) => {
  btn.addEventListener("click", () => {
    // 1. Rogoh kantong data-pesan dari si 'btn'
    const pesan = btn.dataset.pesan;
    // 2. Suntikin pesannya ke dalem variabel 'message' lu
    message.textContent = pesan;
    // 3. Tambahin class .show-modal ke modalBox dan overlay
    modalBox.classList.add("show-modal");
    overlay.classList.add("show-modal");
  });
});

// Close modal when close button is clicked
closeBtn.addEventListener("click", () => {
  modalBox.classList.remove("show-modal");
  overlay.classList.remove("show-modal");
});
