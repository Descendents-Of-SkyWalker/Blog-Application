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

function tileOnClick() {
    const tilesList = document.querySelectorAll('.tile');
    for (const tile of tilesList) {
        tile.addEventListener('click', () => {
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