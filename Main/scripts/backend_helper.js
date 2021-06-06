let queryString = decodeURIComponent(window.location.search);
queryString = queryString.substring(1);

const url = "http://localhost/IWP-Project/Backend/main_page.php";



async function getBlogsData(){
    let dataPackager = new FormData();
    dataPackager.append("action", "blogs");
    return await fetch(url, {
        method: 'POST',
        body : dataPackager
    }).then(
        (data) => data.json()
    )
}

async function getQuotesData(){
    let dataPackager = new FormData();
    dataPackager.append("action", "quotes");
    return await fetch(url, {
        method: 'POST',
        body : dataPackager
    }).then(
        (data) => data.json()
    )
}

function blogData(){
    setTimeout(async function () {
        let val = await getBlogsData();
        setTimeout(function () {
            let title = val.title;
            let name = val.name;
            let content = val.content;
            new Blogs(title, name, content);
            tileOnClick();
        }, 200)
    }, 0)
}
function QuoteData(){
    setTimeout(async function () {
        let val = await getBlogsData();
        setTimeout(function () {
            let name = val.name;
            let content = val.content;
            new Quotes(content, name);
            tileOnClick();
        }, 200)
    }, 0)
}
function insertQuoteData(mail, content){
    setTimeout(async function () {
        let dataPackager = new FormData();
        dataPackager.append('action', 'insertQuote');
        dataPackager.append("mail", mail);
        dataPackager.append("content", content);
        let result = await fetch(url, {
            method: 'POST',
            body: dataPackager
        }).then(response => response.text());
        setTimeout(function () {
            if (result == 'true'){
                alert('Quote uploaded!');
            }
        }, 500)
    }, 0)
}

function insertBlogData(mail, title, content){
    setTimeout(async function () {
        let dataPackager = new FormData();
        dataPackager.append('action', 'insertBlog');
        dataPackager.append("mail", mail);
        dataPackager.append("title", title);
        dataPackager.append("content", content);
        let result = await fetch(url, {
            method: 'POST',
            body: dataPackager
        }).then(response => response.text());
        setTimeout(function () {
            if (result == 'true'){
                alert('Blog uploaded!');
            }
        }, 500)
    }, 0)
}