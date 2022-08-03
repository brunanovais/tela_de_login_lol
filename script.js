const inputs = document.querySelectorAll(".input");

const handLeFocus = ({ target }) => {
    const span = target.previousElementSibling;
    span.classList.add("span_ativo");
}

inputs.forEach((input) => input.addEventListener("focus", handLeFocus));