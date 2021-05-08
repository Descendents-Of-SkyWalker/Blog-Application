let blogsList = ["sample", "sample", "sample", "sample", "sample", "sample", "sample", "sample", "sample", "sample", "sample", "sample", "sample", "sample"];
const main = document.querySelector('main');
const checkBox = document.querySelector('input[type="checkbox"');

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
        small1.setAttributeNode(att);
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
        big.setAttributeNode(att);
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
        const t = this.addElement('div', 'title');
        t.innerHTML = "Sample";
        const b = this.addElement('div', 'content');
        b.innerHTML = "This paragraph is of two hundred and thirty characters including white spaces. You will be able to see only the first two hundred and thirty characters of this blog. To read the full blog, click on this tile. It might interest you...";
        parent.appendChild(t);
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
        this.addTiles(this.len);
    }
    addTiles(n) {
        const quoteContainer = this.addElement('section', 'quote-container');
        for (let i = 0; i < n; i++) {
            const quoteTile = this.addElement('div', 'quote-tile');
            const qr = this.addElement('img', 'q-icon');
            qr.src = "../Assets/quote-right-48.png";
            qr.alt = "q";
            const quote = this.addElement('div', 'quote');
            quote.innerHTML = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur cum aperiam blanditiis repellendus possimus nemo quam saepe dicta, temporibus, nobis adipisci suscipit at perspiciatis. Consequatur nobis expedita at atque dolores! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur cum aperiam blanditiis repellendus possimus nemo quam saepe dicta, temporibus, nobis adipisci suscipit at perspiciatis. Consequatur nobis expedita at atque dolores!"
            const writer = this.addElement('div', 'writer');
            writer.innerHTML = "Lorem Ipsum";
            const ql = this.addElement('img', 'q-icon');
            ql.src = "../Assets/quote-left-48.png";
            ql.alt = "q";
            quoteTile.appendChild(qr);
            quoteTile.appendChild(quote);
            quoteTile.appendChild(writer);
            quoteTile.appendChild(ql);
            quoteContainer.appendChild(quoteTile);
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

new Blogs(blogsList.length);
checkBox.addEventListener('change', () => {
    removeAllElements(main);
    if (!checkBox.checked) {
        new Blogs(blogsList.length);
    }
    else {
        new Quotes(blogsList.length);
    }
});
const tilesList = document.querySelectorAll('.tile');
for (const tile of tilesList) {
    tile.addEventListener('click', () => {
        alert('Yes it works');
    })
}
function removeAllElements(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
