function extractor(dataPackager){
    let table = document.querySelector("table");
    let keylist = table.querySelectorAll("p");
    let valuelist = table.querySelectorAll("input");
    let exceptional = table.querySelector("textarea");
    let flag;

    for(let i = 0;i < valuelist.length;i++){
        if (valuelist[i].value == ''){
            alert("Please fill out all the fields");
            return false;
        }
    }

    for(let i = 0; i < keylist.length - 1; i++){
        flag = innerPackager((keylist[i].innerText).toLowerCase(),valuelist[i].value, flag, dataPackager);
        if (!flag)
            break; // to not collect remaining data if a data field is wrong
    }
    // not collect data if a data field is wrong 
    if (flag){
        keylist.length != valuelist.length ? 
        flag = innerPackager((keylist[keylist.length-1].innerText).toLowerCase(),exceptional.value, flag, dataPackager)
        :
        flag = innerPackager((keylist[keylist.length-1].innerText).toLowerCase(), valuelist[keylist.length-1].value, flag, dataPackager);
    }
    console.log(dataPackager);
    // console.log(flag);
    if (flag)
        document.querySelector("table").remove();
    return flag;
}

function innerPackager(key, value, flag, dataPackager){
    flag = validator(key, value);
    console.log(flag);
    if (flag)
        dataPackager.append(key, value);
    else
        alert(`Please enter a valid ${key}`);
    return flag;
}

const url = "http://localhost/IWP-Project/Backend/signup_login.php";

async function getPostedData(entries){
    try {
        return await fetch(url, {
            method: "POST",
            body: entries,
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
    setTimeout(function () {
        if (varr == 'true'){
            window.location.replace('http://127.0.0.1:5500/Main/pages/index.html#');
        }
        else{
            alert('Authentication failed');
        }
    }, 500);
}