const list = document.querySelectorAll('.list-elem');


for (let i of list){
    i.addEventListener('click', () => {
        let values = i.getBoundingClientRect();
        console.log(values);
    });
}