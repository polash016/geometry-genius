
let colorsArray = ['#fecaca', '#fde68a', '#d9f99d','#bbf7d0', '#99f6e4', '#a5f3fc', '#c7d2fe', '#e9d5ff', '#fbcfe8','#fecdd3']
function changeColor(){
    let i = Math.floor(Math.random()*10);
    document.querySelector('.card').style.backgroundColor = colorsArray[i];
}
function baseColor(){
    document.querySelector('.card').style.backgroundColor = '#f3f4f6';
}