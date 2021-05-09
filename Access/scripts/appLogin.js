let inputNodes = document.querySelectorAll("input");
let titleNodes = document.querySelectorAll("p");
let btn = document.querySelector('button');

btn.addEventListener("click", (event) => {
    event.preventDefault();
    let form = new FormData();
    let flag = false;
    form.append("action","login");
    for(let i = 0;i < 2;i++){
        if (inputNodes[i].value != "" && validator((titleNodes[i].innerText).toLowerCase(), inputNodes[i].value)){
            form.append((titleNodes[i].innerText).toLowerCase(), inputNodes[i].value);
            flag = true;
        }
        else{
            alert("Input valid data");
            flag = false;
            break;
        }
    }
    if (flag){
        getter(form);
    }
});