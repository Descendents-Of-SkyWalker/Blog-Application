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
        QuoteData();
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
        QuoteData();
    }
});

const profile = document.querySelector('#profile');
profile.addEventListener('click', (e) => {
    e.preventDefault();
    poll_for_details();
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
            insertQuoteData(quoteContent);
            document.querySelector('#textArea').value = "";
        }
        else {
            let blogTitle = document.querySelector('#title').value;
            let blogContent = document.querySelector('#textArea').value;
            insertBlogData(blogTitle, blogContent);
            document.querySelector('#title').value = "";
            document.querySelector('#textArea').value = "";
        }
    });
})