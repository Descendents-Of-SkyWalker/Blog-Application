function extractor(dataPackager){
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
}

const url = "http://localhost/IWP-Project/PHP_backend/database.php";

async function getPostedData(entries){
    try {
        // let entries = new FormData(document.querySelector('#inputform'));
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
}