let blogsList = ["sample", "sample", "sample", "sample", "sample", "sample", "sample", "sample", "sample", "sample", "sample", "sample", "sample"];
let blogsTitle = [];
let blogsAuthor = [];
let quotesList = [];
let quotesWriter = ["sample", "sample", "sample"];

const main = document.querySelector('main');
const checkBox = document.querySelector('input[id="switch"]'); //switch button

blogData();
// checkbox switch function
// requires backend
checkBox.addEventListener('change', () => {
    removeAllElements(main);
    if (!checkBox.checked) {
        blogData();
    }
    else {
        new Quotes(quotesList, quotesWriter);
    }
});

function removeAllElements(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

const menu = document.querySelector('#menu');
menu.addEventListener('click', () => {
    const links = document.querySelector('.links');
    links.classList.toggle("expand");
});

const home = document.querySelector('#home');
home.addEventListener('click', (e) => {
    e.preventDefault();
    removeAllElements(main);
    document.querySelector('.inner-nav').style.display = "flex";

    if (!checkBox.checked) {
        blogData();
    }
    else {
        new Quotes(quotesList, quotesWriter);
    }
});

const profile = document.querySelector('#profile');
profile.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.inner-nav').style.display = "none";
    removeAllElements(main);

    const secProfile = document.createElement('section');
    secProfile.classList.add("profile");
    let att = document.createAttribute("data-aos");
    att.value = "zoom-in";
    secProfile.setAttributeNode(att);

    const img = document.createElement('img');
    img.src = "../Assets/profile_w.png";
    img.id = "p-icon";
    secProfile.appendChild(img);

    const name = document.createElement('div');
    name.classList.add('details');
    name.innerHTML = "Name";
    secProfile.appendChild(name);

    const username = document.createElement('div');
    username.classList.add('details');
    username.innerHTML = "Username";
    secProfile.appendChild(username);

    const age = document.createElement('div');
    age.classList.add('details');
    age.innerHTML = "Age";
    secProfile.appendChild(age);

    const gender = document.createElement('div');
    gender.classList.add('details');
    gender.innerHTML = "Gender";
    secProfile.appendChild(gender);

    const address = document.createElement('div');
    address.classList.add('details');
    address.innerHTML = "Address";
    secProfile.appendChild(address);

    const number = document.createElement('div');
    number.classList.add('details');
    number.innerHTML = "Mobile Number";
    secProfile.appendChild(number);

    const email = document.createElement('div');
    email.classList.add('details');
    email.innerHTML = "Email";
    secProfile.appendChild(email);

    const bio = document.createElement('div');
    bio.classList.add('details');
    bio.innerHTML = "Bio";
    secProfile.appendChild(bio);

    const interests = document.createElement('div');
    interests.classList.add('details');
    interests.classList.add('interests');
    interests.innerHTML = "Interests";
    const div = document.createElement('div');
    const int1 = document.createElement('div');
    int1.classList.add('interest');
    int1.innerHTML = "Fun";
    div.appendChild(int1);
    const int2 = document.createElement('div');
    int2.classList.add('interest');
    int2.innerHTML = "Music";
    div.appendChild(int2);
    const int3 = document.createElement('div');
    int3.classList.add('interest');
    int3.innerHTML = "Work";
    div.appendChild(int3);
    interests.appendChild(div);
    secProfile.appendChild(interests);

    main.appendChild(secProfile);
});

const write = document.querySelector('#write');
write.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.inner-nav').style.display = "none";
    removeAllElements(main);
    const containerWrite = document.createElement('section');
    containerWrite.classList.add('container-write');
    let att = document.createAttribute("data-aos");
    att.value = "zoom-in";
    containerWrite.setAttributeNode(att);

    const form = document.createElement('form');
    form.method = "post";
    form.action = "blog";
    form.id = "writeForm";

    const editPanel = document.createElement('nav');
    editPanel.classList.add('edit-panel');

    const div = document.createElement('div');
    div.id = 'toggle';
    const span1 = document.createElement('span');
    span1.innerHTML = "Blog";
    div.appendChild(span1);
    const choicebtn = document.createElement('input');
    choicebtn.type = "checkbox";
    choicebtn.id = "choice";
    div.appendChild(choicebtn);
    const label = document.createElement('label');
    label.setAttribute("for", "choice");
    div.appendChild(label);
    const span2 = document.createElement('span');
    span2.innerHTML = "Quote";
    div.appendChild(span2);
    editPanel.appendChild(div);

    const save = document.createElement('input');
    save.type = "submit";
    save.value = "Save";
    save.name = "save";
    save.id = "savebtn";
    editPanel.appendChild(save);

    const title = document.createElement('input');
    title.id = "title";
    title.type = "text";
    title.placeholder = "Enter title here";

    const textArea = document.createElement('textarea');
    textArea.id = "textArea";
    textArea.placeholder = "Enter text here";

    form.appendChild(editPanel);
    form.appendChild(title);
    form.appendChild(textArea);

    containerWrite.appendChild(form);
    main.appendChild(containerWrite);
    document.querySelector('#choice').addEventListener('change', () => {
        if (document.querySelector('#choice').checked) {
            form.action = "quote";
            title.style.display = "none";
        }
        else {
            form.action = "blog";
            title.style.display = "block";
        }
    });

    document.querySelector('#savebtn').addEventListener('click', (e) => {
        e.preventDefault();
        if (document.querySelector('#choice').checked) {
            let quoteContent = document.querySelector('#textArea').value;
            console.log("QUOTE");
            console.log(quoteContent);
            document.querySelector('#textArea').value = "";
        }
        else {
            let blogTitle = document.querySelector('#title').value;
            let blogContent = document.querySelector('#textArea').value;
            console.log("BLOG");
            console.log(blogTitle);
            console.log(blogContent);
            document.querySelector('#title').value = "";
            document.querySelector('#textArea').value = "";
        }
    });
})