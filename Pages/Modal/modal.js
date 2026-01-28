
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  modal.showModal();

  document.getElementById("closeModal").addEventListener("click", () => {
    modal.close();
  });
});
