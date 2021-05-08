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
                    console.log(dataPackager);
                    getter(dataPackager);
                });
            }
        });
    }
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
        extractor(dataPackager);
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