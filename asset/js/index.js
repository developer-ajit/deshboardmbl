let corouselitem = document.querySelectorAll('.carousel_item');
let btnleft = document.querySelector('.leftarrow');
let rightarrw = document.querySelector('.rightarrw');
 let carrentposi = 0;
function reset() {
    for (let index = 0; index < corouselitem.length; index++) {
        corouselitem[index].style.display = 'none';
    }
}
function stratslid() { 
    reset();
    corouselitem[0].style.display = 'block';
}
stratslid();
function leftslid(){
    reset();
    corouselitem[carrentposi - 1].style.display = 'block';
    carrentposi --;
}
function rightslid(){
    reset();
    corouselitem[carrentposi + 1].style.display = 'block';
    carrentposi ++;
}
btnleft.addEventListener('click', () => {
    if (carrentposi === 0) {
        carrentposi = corouselitem.length;
    }
    leftslid();
});
rightarrw.addEventListener('click', () => {
    if (carrentposi === corouselitem.length - 1) {
        carrentposi = -1;
    }
    rightslid();
});