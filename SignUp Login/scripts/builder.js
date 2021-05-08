// common data builder for all elements except interests on signup page
function dataBuilder(data){
    let container = document.querySelector("#signUpLogin");
    let table = document.createElement("table");
    table.id = "inputs-table";
    for(let i=0;i<data.length;i++){
        let tr = document.createElement("tr");
        let td_1 = document.createElement("td");
        let td_2 = document.createElement("td");
        let p = document.createElement("p");
        let input;
        if(data[i] == "Bio" || data[i] == "Address"){
            input = document.createElement("textarea");
            input.type = "text";
            input.className = "text-box";
            input.id = "textarea";
        }
        else{
            input = document.createElement("input");
            if(data[i].includes("Password"))
                input.type = "password";
            else if (data[i].includes("Mail"))
                input.type = "mail";
            else if (data[i].includes("Age") || data[i].includes("PIN")){
                input.type = "number";
                if (data[i].includes("Age")){
                    input.min = '18';
                    input.max = '100';
                }
                else if (data[i].includes("PIN")){
                    input.max = '999999';
                    input.min = '99999';
                }
            }
            else
                input.type = "text";
            input.className = "text-box";
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

function bubbleMover(iterator){
    let values = list[iterator].getBoundingClientRect();
    bar.style.left = `${values.x-15}px`;
        bar.style.top = `${values.y+40}px`;
        bar.style.width = `${values.width + 30}px`;
}

// builds the interests page
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
        btn.isSelectedFlag = false;
        inputs.appendChild(btn);
    }
    container.appendChild(inputs);
}

// shifts color from blue to green on circles
function listDone(done){
    points[done].classList.toggle("current");
    points[done].classList.toggle("done");
}
// shifts color from white to blue on circles
function listCurrent(current){
    points[current].classList.toggle("current");
}
// combines functions to simply the process
function syncShift(iterator){
    listDone(iterator);
    iterator++;
    listCurrent(iterator);
    bubbleMover(iterator);
    return iterator;
}