let inputNodes = document.querySelectorAll("input");
let titleNodes = document.querySelectorAll("p");
let btn = document.querySelector('button');

btn.addEventListener("click", (event) => {
    event.preventDefault();
    let form = new FormData();
    for(let i = 0;i < 2;i++){
        if (inputNodes[i].value != "")
            form.append((titleNodes[i].innerText).toLowerCase(), inputNodes[i].value);
        else
            alert("Input valid data");
    }
    form.append("action","login");
    getter(form);
});