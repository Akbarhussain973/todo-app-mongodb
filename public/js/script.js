const deleteForms = document.querySelectorAll(".delete-form");
const flashMessages = document.querySelectorAll(".flash");
const forms = document.querySelectorAll("form");
const searchInput = document.querySelector("#search");
const todoItems = document.querySelectorAll(".todo-item");

deleteForms.forEach((form) => {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const result = await Swal.fire({
      title: "Delete Todo?",
      text: "You won't be able to recover it.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ef4444",
      confirmButtonText: "Delete",
    });

    if (result.isConfirmed) {
      form.submit();
    }
  });
});

flashMessages.forEach((flash) => {
  setTimeout(() => {
    flash.classList.add("hide");

    setTimeout(() => {
      flash.remove();
    }, 500);
  }, 3000);
});

forms.forEach((form) => {
  if (form.classList.contains("delete-form")) return;

  form.addEventListener("submit", () => {
    const button = form.querySelector('button[type="submit"]');

    if (!button) return;

    button.disabled = true;
    button.textContent = "Please wait...";
  });
});

if (searchInput) {
  searchInput.addEventListener("input", () => {
    const searchText = searchInput.value.toLowerCase();

    todoItems.forEach((todo) => {
      const todoText = todo
        .querySelector(".todo-text")
        .textContent.toLowerCase();

      if (todoText.includes(searchText)) {
        todo.style.display = "flex";
      } else {
        todo.style.display = "none";
      }
    });
  });
}
