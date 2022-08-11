const inputs = document.querySelectorAll("#input")
const button = document.querySelector(".login_seta")

const handLeFocus = ({ target }) => {
    const span = target.previousElementSibling;
    span.classList.add("span_ativo");
    console.log(target)
}

const handLeFocusOut = ({ target }) => {
    if (target.value == "") {
    const span = target.previousElementSibling;
    span.classList.remove("span_ativo");
}
}

const handLeChange = () => {
    const [username, password] = inputs;
    if (username.value && password.value.length >= 8) {
        button.removeAttribute("disabled");
    } else {
        button.setAttribute("disabled", "");
    }
}
    
inputs.forEach((input) => input.addEventListener("focus", handLeFocus));
inputs.forEach((input) => input.addEventListener("focusout", handLeFocusOut));
inputs.forEach((input) => input.addEventListener("input", handLeChange));