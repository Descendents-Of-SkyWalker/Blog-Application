function bubbleMover(iterator){
    let values = list[iterator].getBoundingClientRect();
    bar.style.left = `${values.x-15}px`;
        bar.style.top = `${values.y+40}px`;
        bar.style.width = `${values.width + 30}px`;
}
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
            else if (data[i].includes("Age") || data[i].includes("PIN"))
                input.type = "number";
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
// records the interests that a person enters (atleast 3 are required)
function interestRecorder(){
    interestsBuilder();
    let inputs = document.querySelectorAll(".choice");
    let counter = 0;
    let flag = false; // this makes sure that the next is disabled only once and event listener is added only once
    let choices = []; // choices of the user will be registered onto this;
    next.innerText = "Submit";
    next.disabled = true;
    for(let i of inputs){
        i.addEventListener('click', (event)=>{
            event.preventDefault();
            i.style.borderColor = "rgba(0, 14, 143)";
            i.style.color = "white";
            i.style.backgroundColor = "rgba(0, 14, 143, 0.7)";
            // makes sure only one click per button is recorded
            if (!i.isSelectedFlag){
                i.isSelectedFlag = true;
                counter++;
                choices.push(i.innerText);
            }
            if (counter>=3 && !flag){
                flag = true;
                listDone(iteration);
                next.disabled = false;
                next.addEventListener('click', () => {
                    dataPackager.append("Interests", choices.join(","));
                    let wrapper = new FormData();
                    wrapper.append("signup_data", dataPackager);
                    console.log(dataPackager);
                    getter(wrapper);
                });
            }
        })
    }
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

const url = "http://localhost/IWP-Project/PHP_backend/database.php";

async function getPostedData(entries){
    try {
        // let entries = new FormData(document.querySelector('#inputform'));
        return await fetch(url, {
            method: "POST",
            body: entries,
            // mode: 'no-cors'
        }).then(
            response => response.text()
        )
    }
    catch (error) {
        console.log(error);
    }
}

async function getter(entries) {
    let varr = await getPostedData(entries);
    console.log(varr);

    // console.log(typeof(varr));
}


const list = document.querySelectorAll('.list-elem');
const bar = document.querySelector(".activeSelection");
let values = list[0].getBoundingClientRect();
const points = document.querySelectorAll(".outer-point");

bar.style.left = `${values.x-15}px`;
bar.style.top = `${values.y+40}px`;
bar.style.width = `${values.width + 30}px`;

let aboutYouKeys = ["Name","Age","Gender","Bio"];
let credentialsKeys = ["Username","Mail ID","Password"];
let addressKeys = ["State","City","PIN Code","Address"];

let iteration = 0;
let flagInterests = false;
listCurrent(iteration);
const next = document.querySelector("#next");

// initializing first information data table
dataBuilder(aboutYouKeys);
let dataPackager = new FormData();

next.addEventListener('click', (event)=>{
    event.preventDefault();
    if (iteration < 3){
        let table = document.querySelector("table");
        let keylist = table.querySelectorAll("p");
        let valuelist = table.querySelectorAll("input");
        let exceptional = table.querySelector("textarea");

        for(let i = 0; i < keylist.length - 1; i++)
            dataPackager.append(keylist[i].innerText, valuelist[i].value);
        keylist.length != valuelist.length ?
            dataPackager.append(keylist[keylist.length-1].innerText, exceptional.value):dataPackager.append(keylist[keylist.length-1].innerText, valuelist[keylist.length-1].value);

        console.log(dataPackager);
        document.querySelector("table").remove();
        iteration = syncShift(iteration);
    }
    switch (iteration) {
        case 1:
            dataBuilder(addressKeys);
            break;
        case 2:
            dataBuilder(credentialsKeys);
            break;
        case 3:
            if (!flagInterests){
                flagInterests = true;
                interestRecorder();
            }
            break;
    }
});