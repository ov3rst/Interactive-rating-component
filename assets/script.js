const d = document,
  $card = d.getElementById("card"),
  $btn = d.getElementById("submit"),
  $ratings = d.querySelector(".ratings"),
  $select = d.querySelector(".select"),
  $template = d.getElementById("thank-you-template").content,
  $fragment = d.createDocumentFragment();

console.log("Ey, what's up :)");

d.addEventListener("click", (e) => {
  if (e.target.matches(".ratings span")) {
    const $spans = d.querySelectorAll(".ratings span");

    $spans.forEach((el) => {
      if (el.classList.contains("is-active")) el.classList.remove("is-active");
    });

    e.target.classList.add("is-active");
  }

  if (e.target === $btn) {
    if (!d.querySelector(".is-active")) {
      $select.classList.add("active");

      setTimeout(() => {
        $select.classList.remove("active");
      }, 1000);
      return;
    }

    $template.querySelector(".selected span").textContent =
      d.querySelector(".is-active").textContent;

    $fragment.appendChild($template);
    $card.innerHTML = null;
    $card.appendChild($fragment);
    setTimeout(() => {
      location.reload();
    }, 3500);
  }
});
