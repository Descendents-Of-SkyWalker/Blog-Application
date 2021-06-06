class Quotes {
    constructor(quotesList, quotesWriter) {
        this.len = quotesWriter.length;
        this.quotesList = quotesList;
        this.quotesWriter = quotesWriter;
        this.idx = 0;
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
            // quote.innerHTML = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur cum aperiam blanditiis repellendus possimus nemo quam saepe dicta, temporibus, nobis adipisci suscipit at perspiciatis. Consequatur nobis expedita at atque dolores!"
            quote.innerHTML = this.quotesList[this.idx];
            const writer = this.addElement('div', 'writer');
            // writer.innerHTML = "Lorem Ipsum";
            writer.innerHTML = this.quotesWriter[this.idx];
            const ql = this.addElement('img', 'q-icon');
            ql.src = "../Assets/quote-left-w.png";
            ql.alt = "q";
            quoteTile.appendChild(qr);
            quoteTile.appendChild(quote);
            quoteTile.appendChild(writer);
            quoteTile.appendChild(ql);
            quoteTileWrap.appendChild(quoteTile)
            quoteContainer.appendChild(quoteTileWrap);
            this.idx++;
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