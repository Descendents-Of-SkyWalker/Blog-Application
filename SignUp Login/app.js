const list = document.querySelectorAll('.list-elem');
const bar = document.querySelector(".activeSelection");
let values = list[0].getBoundingClientRect();
const points = document.querySelectorAll(".outer-point");

bar.style.left = `${values.x-15}px`;
bar.style.top = `${values.y+40}px`;
bar.style.width = `${values.width + 30}px`;

let iteration = 0;
listCurrent(iteration);

const next = document.querySelector("#next");

next.addEventListener('click', (event)=>{
    event.preventDefault();
    document.getElementById("inputs-table").remove();
    switch (iteration) {
        case 0:
            aboutYouBuilder();
            listDone(iteration);
            iteration++;
            listCurrent(iteration);
            bubbleMover(iteration);
            break;
        case 1:
            credentialsBuilder();
            listDone(iteration);
            iteration++;
            listCurrent(iteration);
            bubbleMover(iteration);
            break;
        case 2:
            listDone(iteration);
            interestsBuilder();
            interestRecorder();
            iteration++;
            listCurrent(iteration);
            bubbleMover(iteration);
        case 3:
            listDone(iteration);
            next.innerText = "Submit";
        default:
            break;
    }
});

function bubbleMover(iterator){
    let values = list[iterator].getBoundingClientRect();
    bar.style.left = `${values.x-15}px`;
        bar.style.top = `${values.y+40}px`;
        bar.style.width = `${values.width + 30}px`;
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

function credentialsBuilder(){
    let container = document.querySelector("#signUpLogin");
    let table = document.createElement("table");
    let data = ["Mail ID","Username","Password","Re-type Password"]
    table.id = "inputs-table";
    for(let i=0;i<data.length;i++){
        let tr = document.createElement("tr");
        let td_1 = document.createElement("td");
        let td_2 = document.createElement("td");
        let p = document.createElement("p");
        let input = document.createElement("input");
        if(data[i].includes("Password"))
            input.type = "password";
        else
            input.type = "text";
        input.className = "text-box";
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

function interestsBuilder(){
    let container = document.querySelector("#signUpLogin");
    let selection = ["Fun","Philosophy","Work","Inspiration","Lesuire",
                    "Recreational","Suspense","Music","Market","Recent Trends"];
    let p = document.createElement("p");
    let inputs = document.createElement("div");
    inputs.classList.toggle("containment");
    inputs.className = "containment";
    p.innerText = "Select Atleast 3 as choices";
    p.style.textAlign = "center";
    for(let i=0;i<selection.length;i++){
        let btn = document.createElement("button");
        btn.innerText = selection[i];
        btn.classList.toggle("choice");
        inputs.appendChild(btn);
    }
    container.appendChild(inputs);
}

function interestRecorder(){
    let inputs = document.querySelectorAll(".choice");
    for(let i of inputs){
        i.addEventListener('click', (event)=>{
            event.preventDefault();
            i.style.borderColor = "rgba(0, 14, 143)";
            i.style.color = "white";
            i.style.backgroundColor = "rgba(0, 14, 143, 0.7)";
        })
    }
}

function listDone(done){
    points[done].classList.toggle("current");
    points[done].classList.toggle("done");
    console.log(points[done]);
}

function listCurrent(current){
    points[current].classList.toggle("current");
    console.log(points[current]);

}