let blogsList = ["sample", "sample", "sample", "sample", "sample", "sample", "sample", "sample", "sample", "sample", "sample", "sample", "sample"];
const main = document.querySelector('main');
const checkBox = document.querySelector('input[id="switch"]'); //switch button

class Blogs {
    constructor(len) {
        this.len = len;
        this.addTiles();
    }
    addTiles() {
        while (this.len >= 5) {
            this.fiveTiles();
            this.len -= 5;
        }
        if (this.len === 4) {
            this.fourTiles()
        }
        else if (this.len === 3) {
            this.threeTiles();
        }
        else if (this.len === 2) {
            this.twoTiles();
        }
        else if (this.len === 1) {
            this.oneTile();
        }
    }
    fiveTiles() {
        const five = this.addElement('section', 'five');
        const innerTwo = this.addElement('section', 'inner-two');
        const section1 = document.createElement('section');
        const section2 = document.createElement('section');
        const big1 = this.addContent(this.addElement('div', 'big'));
        const small1 = this.addContent(this.addElement('div', 'small'));
        section1.appendChild(big1);
        section1.appendChild(small1);
        const big2 = this.addContent(this.addElement('div', 'big'));
        const small2 = this.addContent(this.addElement('div', 'small'));
        section2.appendChild(small2);
        section2.appendChild(big2);
        innerTwo.appendChild(section1);
        innerTwo.appendChild(section2);
        const innerThree = this.addContent(this.addElement('section', 'inner-three'));
        five.appendChild(innerTwo);
        five.appendChild(innerThree);
        main.appendChild(five);
    }
    fourTiles() {
        const four = this.addElement('section', 'four');
        const innerTwo = this.addElement('section', 'inner-two');
        const section1 = document.createElement('section');
        const section2 = document.createElement('section');
        const big1 = this.addContent(this.addElement('div', 'big'));
        const small1 = this.addContent(this.addElement('div', 'small'));
        section1.appendChild(big1);
        section1.appendChild(small1);
        const big2 = this.addContent(this.addElement('div', 'big'));
        const small2 = this.addContent(this.addElement('div', 'small'));
        section2.appendChild(small2);
        section2.appendChild(big2);
        innerTwo.appendChild(section1);
        innerTwo.appendChild(section2);
        four.appendChild(innerTwo);
        main.appendChild(four);
    }
    threeTiles() {
        const three = this.addElement('section', 'three');
        const innerTwo = this.addElement('section', 'inner-two');
        const section1 = document.createElement('section');
        const small1 = this.addContent(this.addElement('div', 'small'));
        const big = this.addContent(this.addElement('div', 'big'));
        const small2 = this.addContent(this.addElement('div', 'small'));
        section1.appendChild(small1);
        section1.appendChild(big);
        section1.appendChild(small2);
        innerTwo.appendChild(section1);
        three.appendChild(innerTwo);
        main.appendChild(three);
    }
    twoTiles() {
        const three = this.addElement('section', 'three');
        const innerTwo = this.addElement('section', 'inner-two');
        const section1 = document.createElement('section');
        const big = this.addContent(this.addElement('div', 'big'));
        const small = this.addContent(this.addElement('div', 'small'));
        section1.appendChild(big);
        section1.appendChild(small);
        innerTwo.appendChild(section1);
        three.appendChild(innerTwo);
        main.appendChild(three);
    }
    oneTile() {
        const three = this.addElement('section', 'three');
        const innerTwo = this.addElement('section', 'inner-two');
        const section1 = document.createElement('section');
        const small = this.addContent(this.addElement('div', 'small'));
        section1.appendChild(small);
        innerTwo.appendChild(section1);
        three.appendChild(innerTwo);
        main.appendChild(three);
    }
    addElement(elementType, className) {
        const temp = document.createElement(elementType);
        temp.classList.add(className);
        if (className === 'big' || className === 'small' || className === 'inner-three') {
            temp.classList.add('tile');
            let att = document.createAttribute("data-aos");
            if (className === 'inner-three') {
                att.value = "fade-left";
                temp.setAttributeNode(att);
            }
            else {
                att.value = "fade-up";
                temp.setAttributeNode(att);
            }

        }
        return temp;
    }
    addContent(parent) {
        // Pass as parameters, the title, name of author, and first 230 char of the blog
        // t-->title | a-->author name | b-->230 chars+'...'
        let t;
        if (parent.classList.contains('inner-three')) {
            t = this.addElement('div', 'title-it');
            t.innerHTML = "Sample";
        }
        else if (parent.classList.contains('big')) {
            t = this.addElement('div', 'title-b');
            t.innerHTML = "Sample";
        }
        else if (parent.classList.contains('small')) {
            t = this.addElement('div', 'title-s');
            t.innerHTML = "Sample";
        }
        const a = this.addElement('div', 'author');
        a.innerHTML = "Rajvi Jasani";
        const b = this.addElement('div', 'content');
        b.innerHTML = "This paragraph is of two hundred and thirty characters including white spaces. You will be able to see only the first two hundred and thirty characters of this blog. To read the full blog, click on this tile. It might interest you...";
        parent.appendChild(t);
        parent.appendChild(a);
        parent.appendChild(b);
        return parent;
    }
}
class Quotes {
    constructor(len) {
        this.len = len;
        this.setTiles();
    }
    setTiles() {
        while (this.len >= 3) {
            this.addTiles(3);
            this.len -= 3;
        }
        if (this.len !== 0) {
            this.addTiles(this.len);
        }
    }
    addTiles(n) {
        // quote-->quote | writer-->name of writer
        const quoteContainer = this.addElement('section', 'quote-container');
        for (let i = 0; i < n; i++) {
            const quoteTileWrap = this.addElement('div', 'quote-tile-wrap');
            const quoteTile = this.addElement('div', 'quote-tile');
            const qr = this.addElement('img', 'q-icon');
            qr.src = "../Assets/quote-right-w.png";
            qr.alt = "q";
            const quote = this.addElement('div', 'quote');
            quote.innerHTML = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur cum aperiam blanditiis repellendus possimus nemo quam saepe dicta, temporibus, nobis adipisci suscipit at perspiciatis. Consequatur nobis expedita at atque dolores!"
            const writer = this.addElement('div', 'writer');
            writer.innerHTML = "Lorem Ipsum";
            const ql = this.addElement('img', 'q-icon');
            ql.src = "../Assets/quote-left-w.png";
            ql.alt = "q";
            quoteTile.appendChild(qr);
            quoteTile.appendChild(quote);
            quoteTile.appendChild(writer);
            quoteTile.appendChild(ql);
            quoteTileWrap.appendChild(quoteTile)
            quoteContainer.appendChild(quoteTileWrap);
        }
        main.appendChild(quoteContainer);
    }
    addElement(elementType, className) {
        const temp = document.createElement(elementType);
        temp.classList.add(className);
        if (className === 'quote-tile') {
            let att = document.createAttribute("data-aos");
            att.value = "flip-left";
            temp.setAttributeNode(att);
        }
        return temp;
    }
}
//loading the blogs from server
new Blogs(blogsList.length);
tileOnClick();
// checkbox switch function
// requires backend
checkBox.addEventListener('change', () => {
    removeAllElements(main);
    if (!checkBox.checked) {
        new Blogs(blogsList.length);
        tileOnClick();
    }
    else {
        new Quotes(blogsList.length);
    }
});
function tileOnClick() {
    const tilesList = document.querySelectorAll('.tile');
    for (const tile of tilesList) {
        tile.addEventListener('click', () => {
            // requires fetching from database
            const blogTitle = tile.childNodes[0].textContent; 
            const blogAuthor = tile.childNodes[1].textContent;
            // Can use blogTitle and blogAuthor variables to query the blog from the database and show it in the respective divs below
            removeAllElements(main);
            const displayBlog = document.createElement('div');
            displayBlog.classList.add('display-blog');
            const titleBox = document.createElement('div');
            titleBox.id = "title-box";
            const authorBox = document.createElement('div');
            authorBox.id = "author-box";
            const contentBox = document.createElement('div');
            contentBox.id = "content-box";
            displayBlog.appendChild(titleBox);
            displayBlog.appendChild(authorBox);
            displayBlog.appendChild(contentBox);
            main.appendChild(displayBlog);
        });
    }
}

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
    new Blogs(blogsList.length);
    tileOnClick();
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