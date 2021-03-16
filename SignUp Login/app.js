const list = document.querySelectorAll('.list-elem');
const bar = document.querySelector(".activeSelection");
let values = list[0].getBoundingClientRect();
bar.style.left = `${values.x-15}px`;
bar.style.top = `${values.y+25}px`;
bar.style.width = `${values.width + 25}px`;
for (let i of list){
    i.addEventListener('click', () => {
        let values = i.getBoundingClientRect();
        bar.style.left = `${values.x-15}px`;
        bar.style.top = `${values.y+30}px`;
        bar.style.width = `${values.width + 25}px`;
    });
}
