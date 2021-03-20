const list = document.querySelectorAll('.list-elem');
const bar = document.querySelector(".activeSelection");
let values = list[0].getBoundingClientRect();

bar.style.left = `${values.x-15}px`;
bar.style.top = `${values.y+25}px`;
bar.style.width = `${values.width + 25}px`;

let iteration = 0;

const next = document.querySelector("#next");

next.addEventListener('click', (event)=>{
    event.preventDefault();
    document.getElementById("inputs-table").remove();
    switch (iteration) {
        case 0:
            aboutYouBuilder();
            iteration++;
            bubbleMover(iteration);
            break;
        case 1:
            
        default:
            break;
    }
});

function bubbleMover(iterator){
    let values = list[iterator].getBoundingClientRect();
    bar.style.left = `${values.x-15}px`;
        bar.style.top = `${values.y+30}px`;
        bar.style.width = `${values.width + 25}px`;
}

function aboutYouBuilder(){
    let container = document.querySelector("#signUpLogin");
    let table = document.createElement("table");
    table.id = "inputs-table";
    let data = ["Name","Age","Gender","Bio"];
    for(let i=0;i<data.length;i++){
        let tr = document.createElement("tr");
        let td_1 = document.createElement("td");
        let td_2 = document.createElement("td");
        let p = document.createElement("p");
        let input;
        if(data[i] != "Bio"){
            input = document.createElement("input");
            input.type = "text";
            input.className = "text-box";
        }
        else{
            input = document.createElement("textarea");
            input.type = "text";
            input.className = "text-box";
            input.id = "textarea";
        }
        tr.appendChild(td_1);
        tr.appendChild(td_2);
        td_1.className = "tb-text";
        td_1.appendChild(p);
        p.innerText = `${data[i]}`;
        td_2.appendChild(input);
        table.appendChild(tr);
    }
    container.appendChild(table);
}