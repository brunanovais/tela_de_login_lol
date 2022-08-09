const inputs = document.querySelectorAll("#input")

const handLeFocus = ({ target }) => {
    const span = target.previousElementSibling;
    span.classList.add("span_ativo");
    console.log(target)
}

 const handLeFocusOut = ({ target }) => {
    const span = target.previousElementSibling;
    span.classList.remove("span_ativo");
}
    
inputs.forEach((i) => i.addEventListener("focus", handLeFocus));

inputs.forEach((input) => input.addEventListener("focusout", handLeFocusOut));